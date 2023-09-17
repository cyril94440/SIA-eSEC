import { NextApiRequest, NextApiResponse } from "next";
import { getUserToken } from "@@core/auth";

export async function handleAuthenticated(
  method: "GET" | "POST" | "PUT" | "DELETE",
  req: NextApiRequest,
  res: NextApiResponse,
  handler: () => Promise<void>
) {
  if (req.method !== method) {
    res.status(405).end();
    return;
  }

  const token = await getUserToken({ req });

  if (!token) {
    return res.status(401).end();
  }

  await handler();
}
