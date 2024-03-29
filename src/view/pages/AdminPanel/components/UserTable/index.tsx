import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  FilterFn,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { User, UserRole, UserStatus, columns } from "./columns";
import * as styles from "./styles";
import { Icons } from "../../../../components/Icons";
import { DebouncedInput } from "../../../../components/DebounceInput";
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import AddUser from "./components/add/add-user";
import toast from "react-hot-toast";
import { Api } from "@@core/api/client";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export const UserTable = () => {
  const [data, setData] = React.useState<User[]>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchInvites() {
      try {
        const response = await Api.getInvites();
        if (!response.success) {
          throw new Error(response.error);
        }
        return response.data.invites;
      } catch (error) {
        toast.error("An error occured, please try again.");
      }
    }
    async function fetchUsers() {
      try {
        const response = await Api.getUsers();
        const invites = await fetchInvites();
        if (!response.success) {
          throw new Error(response.error);
        }

        // Existing users marked as active
        const usersWithStatus = response.data.users.map((user) => ({
          ...user,
          status: UserStatus.Active,
        })) as any as User[];

        console.log(invites);
        // Loop through invites and add non-duplicate emails as new users with status Pending
        if (invites) {
          invites.forEach((invite) => {
            if (!usersWithStatus.some((user) => user.email === invite.email)) {
              usersWithStatus.push({
                id: Math.random().toString(36).slice(2),
                fullname: "Not defined",
                email: invite.email,
                role: UserRole.NotDefined,
                status: UserStatus.Pending,
              });
            }
          });
        }
        setData(usersWithStatus as any as User[]);
      } catch (error) {
        toast.error("An error occured, please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      <div css={styles.topBar}>
        <div css={styles.searchContainer}>
          <DebouncedInput
            css={styles.searchInput}
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            placeholder="Search..."
          />
          <span css={styles.searchIcon}>
            <Icons.Search />
          </span>
        </div>
        <AddUser />
      </div>
      <table css={styles.table}>
        <thead css={styles.tableHeader}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th css={styles.header} key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td css={styles.loadingCell} colSpan={table.getAllColumns().length}>
                {loading ? "Loading..." : "No users."}
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr css={styles.row} key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td css={styles.cell} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div css={styles.paginationContainer}>
        <div css={styles.pageButtonsContainer}>
          <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            <div css={styles.iconsContainer}>
              <span css={styles.icon}>
                <Icons.ChevronLeft />
              </span>
            </div>
          </button>
          <span css={styles.pageInfo}>
            <strong>
              {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </strong>
          </span>
          <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            <div css={styles.iconsContainer}>
              <span css={styles.icon}>
                <Icons.ChevronRight />
              </span>
            </div>
          </button>
        </div>
        <div>
          <span>Rows per page </span>
          <select
            css={styles.pageSelector}
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
