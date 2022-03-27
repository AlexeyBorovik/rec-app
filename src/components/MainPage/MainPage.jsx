import { useMemo } from "react";
import { Table } from "../Table/Table";
import { useTranslation } from 'react-i18next';
import style from "./MainPage.module.css";

export const MainPage = () => {
  const reviews = require("../../reviews.json");

  const { t } = useTranslation();

  const review = reviews[0];

  const columns = useMemo(() => [
    { Header: `${t("mainPage.tab.title")}`, accessor: "title" },
    { Header: `${t("mainPage.tab.author")}`, accessor: "author" },
    { Header: `${t("mainPage.tab.group")}`, accessor: "group" },
    { Header: `${t("mainPage.tab.tags")}`, accessor: "tags" },
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
