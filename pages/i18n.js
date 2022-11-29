import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend"; 

i18n
    .use(initReactI18next)
    .use(backend) 
    .init({
    
        resources: {
            pl: {
                translation: {
                    "title": "Formularz rejestracji / autoryzacji"
                }
            },
            ru: {
                translation: {
                    "title": "Форма регистрации/авторизации"
                }
            },
            en: {
                translation: {
                    "title" : "SignIn/SignUp Form"

                }
            }

        },
        lng: "en", 
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });