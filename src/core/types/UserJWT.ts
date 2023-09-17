import { UserRole } from "./UserRole";

export interface UserJWT {
  id: string;
  username: string;
  email: string;
  image: string | null;
  role: UserRole;
}
