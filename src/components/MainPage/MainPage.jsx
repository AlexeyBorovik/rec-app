import { useMemo } from "react";
import { Table } from "../Table/Table";
import style from "./MainPage.module.css";

export const MainPage = () => {
  const reviews = require("../../reviews.json");

  const review = reviews[0];

  const columns = useMemo(() => [
    { Header: "Title", accessor: "title" },
    { Header: "Author", accessor: "author" },
    { Header: "Group", accessor: "group" },
    { Header: "Tags", accessor: "tags" },
  ]);
  const data = useMemo(() => reviews, []);

  return (
    <div className={style.main}>
      <div>{review.tags.map((tag) => `#${tag}`)}</div>
      <div>
        <Table columns={columns} data={reviews}></Table>
      </div>
    </div>
  );
};
