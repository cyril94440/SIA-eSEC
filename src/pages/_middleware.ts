import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  const isAdmin = isAuthenticated && token.role === "ADMIN";

  // Let unauthenticated users access the activate page to sign up but redirect authenticated users to dashboard
  if (req.nextUrl.pathname.startsWith("/activate")) {
    return !isAuthenticated ? NextResponse.next() : NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Prevent logged in users from accessing the login page
  if (req.nextUrl.pathname.startsWith("/login") && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Prevent non-admin users from accessing the admin panel
  if (req.nextUrl.pathname.startsWith("/admin-panel") && !isAdmin) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  const authMiddleware = withAuth({
    pages: {
      signIn: `/login`,
    },
  });

  // @ts-expect-error
  return authMiddleware(req, event);
}
