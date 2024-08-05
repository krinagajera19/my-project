// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import translationEN from "../src/locales/en/transaction.json"
// import translationFR from "../src/locales/fr/transaction.json";
// import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend'


// // The translations
// const resources = {
//   en: {translation: translationEN},
//   fr: {translation: translationFR}
// };

// i18n
//   .use(Backend)
//   .use(initReactI18next)
//   .use(LanguageDetector) 
//   .init({
//     resources,
//     lng: 'en', 
//     fallbackLng: 'en', 
//     debug: true,

//     interpolation: {
//       escapeValue: false 
//     },
//     react: {   
//         useSuspense: true,
//     },
    
//   });

// export default i18n;




// show the selected language

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';  
import Backend from 'i18next-http-backend';
import translationEN from "../src/locales/en/transaction.json";
import translationFR from "../src/locales/fr/transaction.json";

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
};

// Get the saved language from localStorage or fallback to 'en'
const savedLanguage = localStorage.getItem('i18nextLng') || 'en';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // Set the language to the saved language
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    react: {
      useSuspense: true,
    },
  });

// Update language preference in localStorage when it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18n;

