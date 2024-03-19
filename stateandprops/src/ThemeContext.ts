import { createContext } from 'react';

export const  ThemeContext   = createContext("light");
export const LanguageContext = createContext("en");

export const AppContext = createContext({
    theme: "light",
    language: "en",
    membership : "Freemium"
});