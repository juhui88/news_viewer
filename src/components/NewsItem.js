import React from "react";
import "./NewsItem.css"

const NewsItem = ({url,urlImg, title, description}) => {
    
    return (

        <div className="news_wrap" >
            <a href = {url} className =  "news-item" >
                <div>
                    <img src = {urlImg} className = "news-item-img"/>
                </div>
                    
                <div className="news-item-info">
                    <p className = "news-item-title">{title}</p>
                    <p className = "news-item-des">{description}</p>
                </div>
                
            </a>
        </div>
    )
}

export default NewsItem;