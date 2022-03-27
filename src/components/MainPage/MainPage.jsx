import { useMemo } from "react";
import { Table } from "../Table/Table";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import style from "./MainPage.module.css";

export const MainPage = () => {
  const reviews = require("../../reviews.json");

  const { t } = useTranslation();

  const review = reviews[0];

  const columns = useMemo(() => [
    { Header: `${t("tab.title")}`, accessor: "title" },
    { Header: `${t("tab.author")}`, accessor: "author" },
    { Header: `${t("tab.group")}`, accessor: "group" },
    { Header: `${t("tab.tags")}`, accessor: "tags" },
  ]);
  const data = useMemo(() => reviews, [i18next.language]);

  return (
    <div className={style.main}>
      <div>{review.tags.map((tag) => `#${tag}`)}</div>
      <div>
        <Table columns={columns} data={data}></Table>
      </div>
    </div>
  );
};
