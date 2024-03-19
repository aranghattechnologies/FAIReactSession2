import { useContext } from "react";
import ArticleFooter from "./ArticleFooter";
import { ThemeContext } from "./ThemeContext";

type ArticleProps = {
    title: string;
    content: string;
}

export default function Article(props:ArticleProps) {

    let theme = useContext(ThemeContext);
    return (
        <div className={"article "  + (theme === "light" ? "light" : "dark")}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
         
                    <ArticleFooter id={1001} />
           
        </div>
    );

}

