import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            langToggle: "Language",
            authButton: "Log In",
          },
          sideBar: {
            main: "Main page",
            my: "My Reviews",
            review: "Review",
            edit: "Edit review",
          },
          auth: {
            login: {
              title: "Sign In",
              email: "E-mail",
              password: "Password",
              button: "Log in",
            },
          },
          myPage: {
            create: "New Review",
            changeButton: "Change",
            deleteButton: "Delete",
          },
          tab: {
            title: "Title",
            author: "Author",
            group: "Theme",
            tags: "Tags #",
            search1: `Search`,
            search2: `records...`
          },
          review: {
            mark: "Rate review",
          },
          edit: {
            title: "Title",
            group: "Choose group of your review",
            tags: "Choose a tags:",
            description: "Type your review",
            saveButton: "Save",
          },
        },
      },
      ru: {
        translation: {
          header: {
            langToggle: "Язык",
            authButton: "Вход",
          },
          sideBar: {
            main: "Главная",
            my: "Мои Обзоры",
            review: "Обзор",
            edit: "Изменение обзора",
          },
          auth: {
            login: {
              title: "Вход",
              email: "E-mail",
              password: "Пароль",
              button: "Войти",
            },
          },
          myPage: {
            create: "Создать обзор",
            changeButton: "Изменить",
            deleteButton: "Удалить",
          },
          tab: {
            title: "Заголовок",
            author: "Автор",
            group: "Тема",
            tags: "Тэги #",
            search1: `Выбрать из`,
            search2: `обзоров...`
          },
          review: {
            mark: "Оцените обзор",
          },
          edit: {
            title: "Заголовок",
            group: "Выберите тему обзора",
            tags: "Выберите тэги:",
            description: "Текст вашего обзора",
            saveButton: "Сохранить",
          },
        },
      },
    },
  });

export default i18n;
