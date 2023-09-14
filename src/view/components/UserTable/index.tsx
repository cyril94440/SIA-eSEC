import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  FilterFn,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { columns, defaultData } from "./columns";
import * as styles from "./styles";
import { Icons } from "../Icons";
import { DebouncedInput } from "../DebounceInput";
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import AddUser from "./components/add-user";
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
  const [data, setData] = React.useState(() => [...defaultData]);
  const [globalFilter, setGlobalFilter] = React.useState("");

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
          {table.getRowModel().rows.map((row) => (
            <tr css={styles.row} key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td css={styles.cell} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
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
