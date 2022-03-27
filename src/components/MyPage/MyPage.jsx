import styles from "./MyPage.module.css";
import { useMemo } from "react";
import { Button } from "react-bootstrap";
import { Table } from "../Table/Table";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export const MyPage = () => {
  let reviews = require("../../reviews.json");

  const { t } = useTranslation();

  const columns = useMemo(
    () => [
      {
        Header: `${t("tab.title")}`,
        accessor: "title",
        canFilter: true
      },
      { Header: `${t("tab.tags")}`, accessor: "tags" },

      { Header: `${t("tab.group")}`, accessor: "group" },

      { accessor: "buttons", canFilter: false },
    ],
    [i18next.language]
  );

  const data = useMemo(() => reviews.map(
    (review) => {
      return {
        ...review,
        buttons: [
          <Button variant="outline-primary">{t('myPage.changeButton')}</Button>,
          <Button variant="danger">{t('myPage.deleteButton')}</Button>,
        ],
      };
    }
  ), [i18next.language]);

  return (
    <div className={styles}>
      <Button>{t('myPage.create')}</Button>
      <Table columns={columns} data={data} />
    </div>
  );
};
