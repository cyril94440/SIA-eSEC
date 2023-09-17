import { getToken, GetTokenParams } from "next-auth/jwt";
import { UserJWT } from "./types";

export async function getUserToken(params: GetTokenParams): Promise<UserJWT | null> {
  const token = await getToken(params);

  if (!token) {
    return null;
  }

  return token as any as UserJWT;
}
