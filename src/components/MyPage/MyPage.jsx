import styles from "./MyPage.module.css";
import { useMemo } from "react";
import { Button } from "react-bootstrap";
import {Table} from "../Table/Table";
import { useTranslation } from 'react-i18next';

export const MyPage = () => {
  let reviews = require("../../reviews.json");

  const { t } = useTranslation();

// ATTENTION! NEED TO RESEARCH //
  const tableData = reviews.map(
    (review) =>
      (review["buttons"] = [
        <Button variant="outline-primary">{t('myPage.changeButton')}</Button>,
        <Button variant="danger">{t('myPage.deleteButton')}</Button>,
      ])
  );
// ATTENTION! NEED TO RESEARCH //

  const columns = useMemo(
    () => [
      {
        Header: `${t("myPage.tab.title")}`,
        accessor: "title",
        canFilter: true
      },
      { Header: `${t("myPage.tab.tags")}`, accessor: "tags" },

      { Header: `${t("myPage.tab.group")}`, accessor: "group" },

      { accessor: "buttons", canFilter: false },
    ],
    []
  );

  const data = useMemo(() => reviews, []);

  return (
    <div className={styles}>
      <Button>{t('myPage.create')}</Button>
      <Table columns={columns} data={data} />
    </div>
  );
};
