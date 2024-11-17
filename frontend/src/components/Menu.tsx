import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Menu: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");
  const { i18n } = useTranslation();

  // Function to change the language
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    localStorage.setItem("language", lang); // Persist the language in localStorage
  };

  // Load the language from localStorage or fallback to the default (en)
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage); // Set to the saved language if available
    } else {
      localStorage.setItem("language", currentLanguage); // Initialize language in localStorage
    }
  }, [currentLanguage]);

  // This effect applies the current language to i18n
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <div>
      <button onClick={() => changeLanguage("es")}>Español</button>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("it")}>Italiano</button>
    </div>
  );
};

export default Menu;
