import i18next from "i18next";
import esTranslations from "/public/locales/es/translation.json";
import enTranslations from "/public/locales/en/translation.json";

i18next.init({
    lng: "es", // Idioma por defecto
    resources: {
        es: {
            translation: esTranslations,
        },
        en: {
            translation: enTranslations,
        },
    },
});

export default i18next;