import {useState} from 'react';
import './App.css';
import Article from './Article';
import { LanguageContext, ThemeContext } from './ThemeContext';

export default function App() {

  let [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div>
      <button type='button'
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >{ ("Change to " + (theme == "light" ? "Dark" : "Light"))}</button>
      <LanguageContext.Provider value="en">
        <ThemeContext.Provider value={theme}>
            <Article title="Football World Cup" 
              content="India qualifies for Fifa Football World Cup" 
              />

                <Article title="Nvidia to launch new GPU" 
              content="New Nvidia GPU is expected to be released in 2024" 
              />

                <Article title="OpenAI's new robot" 
              content="OpenAI's new robot can do backflips and somersaults" 
              />
        </ThemeContext.Provider>

        <Article title="India's new vaccine" content='India to launch new vaccine for Covid-19' />

        <ThemeContext.Provider value={theme == "dark" ? "light" : "dark"}>
          <Article title="India's new vaccine" content='India to launch new vaccine for Covid-19' />
          <Article title="India's new vaccine" content='India to launch new vaccine for Covid-19' />
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}




