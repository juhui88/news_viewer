import React from "react";

const NewsItem = ({url,urlImg, title, description}) => {
    return (
        <div className="news">
            <a href = {url}>
                <img src = {urlImg}/>
                <h1>{title}</h1>
                <h3>{description}</h3>
            </a>
        </div>
    )
}

export default NewsItem;