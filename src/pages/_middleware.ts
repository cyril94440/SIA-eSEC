import { withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getUserToken, UserRole } from "@@core/auth";

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getUserToken({ req });
  const isAuthenticated = !!token;
  const isAdmin = isAuthenticated && token?.role === UserRole.Admin;

  if (req.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/terms")) {
    return NextResponse.next();
  }

  // Let unauthenticated users access the activate page to sign up but redirect authenticated users to dashboard
  if (req.nextUrl.pathname.startsWith("/activate")) {
    return !isAuthenticated && req.nextUrl.searchParams.get("token")
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Let unauthenticated users access the forgot password page
  if (req.nextUrl.pathname.startsWith("/forgot-password")) {
    return !isAuthenticated ? NextResponse.next() : NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Let users access the reset password page if it has a token
  if (req.nextUrl.pathname.startsWith("/reset-password")) {
    return req.nextUrl.searchParams.get("token")
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/login", req.url));
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
