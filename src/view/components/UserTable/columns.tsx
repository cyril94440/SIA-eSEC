import { createColumnHelper } from "@tanstack/react-table";
import { Icons } from "../Icons";
import { IconButton } from "../IconButton";
import * as styles from "../UserTable/styles";
import { DeleteUser } from "./components/delete/delete-user";

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

export const defaultData: User[] = [
  {
    id: "1",
    username: "John Doe",
    email: "john@doe.com",
    role: UserRole.Admin,
  },
  {
    id: "2",
    username: "Jane Doe",
    email: "jane@doe.com",
    role: UserRole.User,
  },
  {
    id: "3",
    username: "Jake Doe",
    email: "jake@doe.com",
    role: UserRole.User,
  },
  {
    id: "4",
    username: "Sarah Smith",
    email: "sarah@smith.com",
    role: UserRole.Admin,
  },
  {
    id: "5",
    username: "Michael Johnson",
    email: "michael@johnson.com",
    role: UserRole.User,
  },
  {
    id: "6",
    username: "Emily Brown",
    email: "emily@brown.com",
    role: UserRole.User,
  },
  {
    id: "7",
    username: "David Wilson",
    email: "david@wilson.com",
    role: UserRole.Admin,
  },
  {
    id: "8",
    username: "Olivia Lee",
    email: "olivia@lee.com",
    role: UserRole.User,
  },
  {
    id: "9",
    username: "William Davis",
    email: "william@davis.com",
    role: UserRole.User,
  },
  {
    id: "10",
    username: "Sophia Martinez",
    email: "sophia@martinez.com",
    role: UserRole.Admin,
  },
  {
    id: "11",
    username: "James Anderson",
    email: "james@anderson.com",
    role: UserRole.User,
  },
  {
    id: "12",
    username: "Emma Thomas",
    email: "emma@thomas.com",
    role: UserRole.User,
  },
  {
    id: "13",
    username: "Daniel Harris",
    email: "daniel@harris.com",
    role: UserRole.Admin,
  },
  {
    id: "14",
    username: "Ava Jackson",
    email: "ava@jackson.com",
    role: UserRole.User,
  },
  {
    id: "15",
    username: "Benjamin White",
    email: "benjamin@white.com",
    role: UserRole.User,
  },
  {
    id: "16",
    username: "Mia Lopez",
    email: "mia@lopez.com",
    role: UserRole.Admin,
  },
  {
    id: "17",
    username: "Ethan Moore",
    email: "ethan@moore.com",
    role: UserRole.User,
  },
  {
    id: "18",
    username: "Chloe Adams",
    email: "chloe@adams.com",
    role: UserRole.User,
  },
  {
    id: "19",
    username: "Liam Hall",
    email: "liam@hall.com",
    role: UserRole.Admin,
  },
  {
    id: "20",
    username: "Ella Clark",
    email: "ella@clark.com",
    role: UserRole.User,
  },
  {
    id: "21",
    username: "Alexander King",
    email: "alexander@king.com",
    role: UserRole.User,
  },
  {
    id: "22",
    username: "Grace Scott",
    email: "grace@scott.com",
    role: UserRole.Admin,
  },
  {
    id: "23",
    username: "Jackson Baker",
    email: "jackson@baker.com",
    role: UserRole.User,
  },
  {
    id: "24",
    username: "Lily Allen",
    email: "lily@allen.com",
    role: UserRole.User,
  },
  {
    id: "25",
    username: "Sebastian Turner",
    email: "sebastian@turner.com",
    role: UserRole.Admin,
  },
  {
    id: "26",
    username: "Avery Green",
    email: "avery@green.com",
    role: UserRole.User,
  },
  {
    id: "27",
    username: "Jackson Baker",
    email: "jackson@baker.com",
    role: UserRole.User,
  },
  {
    id: "28",
    username: "Lily Allen",
    email: "lily@allen.com",
    role: UserRole.Admin,
  },
  {
    id: "29",
    username: "Sebastian Turner",
    email: "sebastian@turner.com",
    role: UserRole.User,
  },
  {
    id: "30",
    username: "Avery Green",
    email: "avery@green.com",
    role: UserRole.User,
  },
  {
    id: "31",
    username: "William Davis",
    email: "william@davis.com",
    role: UserRole.Admin,
  },
  {
    id: "32",
    username: "Sophia Martinez",
    email: "sophia@martinez.com",
    role: UserRole.User,
  },
  {
    id: "33",
    username: "James Anderson",
    email: "james@anderson.com",
    role: UserRole.User,
  },
  {
    id: "34",
    username: "Emma Thomas",
    email: "emma@thomas.com",
    role: UserRole.Admin,
  },
  {
    id: "35",
    username: "Daniel Harris",
    email: "daniel@harris.com",
    role: UserRole.User,
  },
  {
    id: "36",
    username: "Ava Jackson",
    email: "ava@jackson.com",
    role: UserRole.User,
  },
  {
    id: "37",
    username: "Benjamin White",
    email: "benjamin@white.com",
    role: UserRole.Admin,
  },
  {
    id: "38",
    username: "Mia Lopez",
    email: "mia@lopez.com",
    role: UserRole.User,
  },
  {
    id: "39",
    username: "Ethan Moore",
    email: "ethan@moore.com",
    role: UserRole.User,
  },
  {
    id: "40",
    username: "Chloe Adams",
    email: "chloe@adams.com",
    role: UserRole.Admin,
  },
  {
    id: "41",
    username: "Liam Hall",
    email: "liam@hall.com",
    role: UserRole.User,
  },
  {
    id: "42",
    username: "Ella Clark",
    email: "ella@clark.com",
    role: UserRole.User,
  },
  {
    id: "43",
    username: "Alexander King",
    email: "alexander@king.com",
    role: UserRole.Admin,
  },
  {
    id: "44",
    username: "Grace Scott",
    email: "grace@scott.com",
    role: UserRole.User,
  },
  {
    id: "45",
    username: "Jackson Baker",
    email: "jackson@baker.com",
    role: UserRole.User,
  },
  {
    id: "46",
    username: "Lily Allen",
    email: "lily@allen.com",
    role: UserRole.Admin,
  },
  {
    id: "47",
    username: "Sebastian Turner",
    email: "sebastian@turner.com",
    role: UserRole.User,
  },
  {
    id: "48",
    username: "Avery Green",
    email: "avery@green.com",
    role: UserRole.User,
  },
  {
    id: "49",
    username: "Madison Parker",
    email: "madison@parker.com",
    role: UserRole.Admin,
  },
  {
    id: "50",
    username: "Daniel Reed",
    email: "daniel@reed.com",
    role: UserRole.User,
  },
];

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
    cell: (info) => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <IconButton
          customStyles={styles.resetPasswordIcon}
          icon={<Icons.Key />}
          onClick={() => alert("Reset password for id : " + info.getValue())}
        />
        <DeleteUser id={info.getValue()} />
      </div>
    ),
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
