import { createColumnHelper } from "@tanstack/react-table";
import { DeleteUser } from "./components/delete/delete-user";
import { ResetPassword } from "./components/reset-password/reset-password";

export type User = {
  id: string;
  username: string;
  email: string;
  role: UserRole;
};

export enum UserRole {
  Admin = "admin",
  User = "user",
}

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor((row) => row.username, {
    id: "username",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Username</span>,
  }),
  columnHelper.accessor((row) => row.email, {
    id: "email",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Email</span>,
  }),
  columnHelper.accessor((row) => row.role, {
    id: "role",
    cell: (info) => <span>{info.getValue().toUpperCase()}</span>,
    header: () => <span>Role</span>,
  }),
  columnHelper.accessor((row) => row.id, {
    id: "actions",
    cell: (info) => {
      const { id, email, username } = info.row.original;
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <ResetPassword id={id} username={username} userEmail={email} />
          <DeleteUser id={id} />
        </div>
      );
    },
    header: () => (
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        Actions
      </span>
    ),
  }),
];
