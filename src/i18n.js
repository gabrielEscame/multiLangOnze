import i18n from 'i18next'
import moment from 'moment'
import { initReactI18next } from 'react-i18next'
import "moment/locale/pt-br";
// import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import pt from './locales/pt.json'

export const newMoment = moment()

i18n
// .use(LanguageDetector) podemos usar para a tela de login :D
.use(initReactI18next) // passando react-i18next para o i18n
.on('languageChanged', (lng) => {
  newMoment.locale(lng)
})
.init({
  resources: {en, pt}, // json contendo o objeto de textos
  lng: 'pt', // lingua que será iniciado
  fallbackLng: 'pt', // caso lng não exista
  interpolation: { escapeValue: false} // permite valores dinamicos nas traduções (react já faz)
})

export default i18n