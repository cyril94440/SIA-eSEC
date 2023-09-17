export enum UserRole {
  Admin = "ADMIN",
  User = "USER",
}

export interface UserJWT {
  id: string;
  username: string;
  email: string;
  image: string | null;
  role: UserRole;
}
