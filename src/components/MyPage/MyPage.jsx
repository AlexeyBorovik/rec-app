import styles from "./MyPage.module.css";
import { useMemo } from "react";
import { Button } from "react-bootstrap";

import BTable from "react-bootstrap/Table";
import { useTable, useSortBy, useFilters } from "react-table";

const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
};

const Table = ({ columns, data }) => {

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters,
    useSortBy
  );

  return (
    <BTable striped bordered hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
                <span>{column.canFilter ? column.render('Filter') : null}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </BTable>
  );
};

export const MyPage = () => {
  let reviews = require("../../reviews.json");

  const tableData = reviews.map(
    (review) =>
      (review["buttons"] = [
        <Button variant="outline-primary">Изменить</Button>,
        <Button variant="danger">Удалить</Button>,
      ])
  );

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
        canFilter: true
      },
      { Header: "Tags", accessor: "tags" },

      { Header: "Theme", accessor: "group" },

      { accessor: "buttons", canFilter: false },
    ],
    []
  );

  const data = useMemo(() => reviews, []);

  return (
    <div className={styles}>
      <Button>Создать обзор</Button>
      <Table columns={columns} data={data} />
    </div>
  );
};
