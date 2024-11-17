import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend"; // to pull from backend

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    backend: {
      loadPath: "http://localhost:3005/languages/{{lng}}-translation.json",
    },
  })
  .then(() => {
    console.log("i18n initialized:", i18n); // This should now log after initialization
  })
  .catch((error) => {
    console.error("i18n initialization failed:", error); // Catch any initialization errors
  });

export default i18n;
