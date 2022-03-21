import styles from "./MyPage.module.css";
import { useMemo } from "react";
import { Button } from "react-bootstrap";
import {Table} from "../Table/Table";

export const MyPage = () => {
  let reviews = require("../../reviews.json");

// ATTENTION! NEED TO RESEARCH //
  const tableData = reviews.map(
    (review) =>
      (review["buttons"] = [
        <Button variant="outline-primary">Изменить</Button>,
        <Button variant="danger">Удалить</Button>,
      ])
  );
// ATTENTION! NEED TO RESEARCH //

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
