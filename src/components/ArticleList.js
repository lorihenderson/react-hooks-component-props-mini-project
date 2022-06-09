import React from "react";
import Article from "./Article";

function ArticleList( props ) {
    return (
        <main>
            {props.posts.map((post) => <Article key={post.id} date={post.date} title={post.title} preview={post.preview}/>)}
        </main>
    )
}

export default ArticleList