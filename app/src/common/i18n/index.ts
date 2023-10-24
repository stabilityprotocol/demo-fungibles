import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";

void i18n.use(initReactI18next).init({
  lng: "en",
  debug: false,
  resources: { en: { translation: enTranslation } },
});
