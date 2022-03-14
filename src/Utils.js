import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// stores selected language
var lang = 'de_DE';

/**
 * Selects language based on user preferences (choose german if in list, english otherwise)
 */
function detectLanguage() {
    // read stored language
    lang = localStorage.getItem('lang');
    if (lang) return;

    // detect language
    var hasGerman = false;
    for (const userLang of navigator.languages) {
        if (userLang === 'de' || userLang.startsWith('de-') || userLang.startsWith('de_')) {
            hasGerman = true;
        }
    }
    lang = hasGerman ? 'de_DE' : 'en_US';
}
detectLanguage();

/**
 * Sets the current language and rerenders the website.
 * Currently supported languages: de_DE, en_US
 * 
 * @param {String} l language to set to
 */
export function setLanguage(l) {
    // store language (using localStorage for longer term storage)
    lang = l;
    localStorage.setItem('lang', l);

    //TODO: this really needs a better way of rerendering
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

/**
 * @returns The current language
 */
export function getLanguage() {
    return lang;
}

/**
 * Selects the String for the current language from the provided object.
 * 
 * @param {{de_DE: String, en_US: String}} langObject 
 * @returns String for current language
 */
export function getString(langObject) {
    return langObject[lang]; //TODO: implement actual translation / lang stuff
}
