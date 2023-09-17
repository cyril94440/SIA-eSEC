import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "lib/db";
import { User } from "next-auth";
import { getUserToken, UserRole } from "@@core";

export default async function handler(req: NextApiRequest, res: NextApiResponse<User[]>) {
  const token = await getUserToken({ req });
  const isAuthenticated = !!token;
  const isAdmin = isAuthenticated && token?.role === UserRole.Admin;

  if (!isAuthenticated || !isAdmin) {
    return res.status(401).end();
  }

  switch (req.method) {
    case "GET":
      return getUsers(req, res);

    case "DELETE":
      return deleteUser(req, res);

    default:
      return res.status(405).end();
  }
}

async function getUsers(req: NextApiRequest, res: NextApiResponse<User[]>) {
  try {
    const users = await db.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).end();
  }
}

async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body.id) return res.status(400).end();

  try {
    const user = await db.user.delete({
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).end();
  }
}
