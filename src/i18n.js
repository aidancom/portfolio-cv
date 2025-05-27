import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../public/locales/en/translation.json'
import translationES from '../public/locales/es/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
}

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources,
    fallbackLng: 'es',
    detection: {
      order: ['path', 'navigator'],
      lookupFromPathIndex: 0,
    },
    interpolation: {
      escapeValye: false
    }
  });

export default i18n;