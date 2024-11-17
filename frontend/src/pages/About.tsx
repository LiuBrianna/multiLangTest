import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n"; // This will trigger i18n initialization
import Menu from "../components/Menu";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main>
      <Menu />
      <h1>{t("about")}</h1>
    </main>
  );
};

export default About;
