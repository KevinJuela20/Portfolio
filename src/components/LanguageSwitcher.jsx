import { h } from 'preact';
import { useState } from 'preact/hooks';
import i18next from '../../i18m.js';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState(i18next.language);
    console.log("Entro al componenete")
  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    i18next.changeLanguage(newLanguage).then(() => {
      setLanguage(newLanguage);
      const path = window.location.pathname;
      const hash = window.location.hash;
      const newPath = newLanguage === 'es' ? path.replace(/^\/en/, '') : `/en${path}`;
      window.location.href = `${newPath}${hash}`;
    }).catch((error) => {
      console.error("Error changing language:", error);
    });
  };
  console.log("Salio al componenete")

  return (
    <button class="floating-language-switch" onClick={toggleLanguage}>
      {language === 'es' ? 'English' : 'Español'}
    </button>
  );
}
