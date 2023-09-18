import { NextApiRequest, NextApiResponse } from "next";
import { UserJWT, getUserToken } from "@@core/auth";

export async function handleAuthenticated(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  req: NextApiRequest,
  res: NextApiResponse,
  handler: (token: UserJWT) => Promise<void>
) {
  if (req.method !== method) {
    res.status(405).end();
    return;
  }

  const token = await getUserToken({ req });

  if (!token) {
    return res.status(401).end();
  }

  await handler(token);
}
