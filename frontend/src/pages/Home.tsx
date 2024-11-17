import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n"; // This will trigger i18n initialization

const Home: React.FC = () => {
  const { t } = useTranslation(); // Use useTranslation hook

  return (
    <main>
      <h1>{t("title")}</h1>
      <span>{t("label")}</span>
    </main>
  );
};

export default Home;
