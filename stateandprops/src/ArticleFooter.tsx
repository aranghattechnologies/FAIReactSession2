import {useContext} from 'react';
import {ThemeContext} from './ThemeContext';

type ArticleFooterProps = {
    id : number;
}

export default function ArticleFooter(props:ArticleFooterProps){

    let theme = useContext(ThemeContext);
   
    return (
        <div className={theme === "light" ? "dark" : "light"}>
            <span>Share</span> | <span>Save</span> | <span>Comment</span>
        </div>
    );
}