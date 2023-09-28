import { createColumnHelper } from "@tanstack/react-table";
import { DeleteUser } from "./components/delete/delete-user";
import { ResetPassword } from "./components/reset-password/reset-password";
import EditUser from "./components/edit/edit-user";

export type User = {
  id: string;
  fullname: string;
  email: string;
  role: UserRole;
};

export enum UserRole {
  Admin = "admin",
  User = "user",
}

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor((row) => row.fullname, {
    id: "fullname",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Full Name</span>,
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
      const { id, email, fullname, role } = info.row.original;
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <EditUser id={id} fullname={fullname} actualRole={role} />
          <ResetPassword id={id} fullname={fullname} userEmail={email} />
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
