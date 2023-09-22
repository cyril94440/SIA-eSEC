export enum UserRole {
  Admin = "ADMIN",
  User = "USER",
}

export interface UserJWT {
  id: string;
  fullname: string;
  email: string;
  image: string | null;
  role: UserRole;
}
