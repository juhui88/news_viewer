import React, {useState, useEffect} from "react";
import axios from 'axios';
import NewsItem from "./NewsItem";

const NewsList = ({category}) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const query = category === undefined ? "" : `&category=${category}`;


    const getNews = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=120099f250774af88a0973a2294cb5eb`)
            .then(response => {
                setNews(response.data.articles);
                setLoading(false);
            })
        }
    
    useEffect(() =>{getNews()}, [category])

    return (
        <div>
            {loading? <h1>Loading...</h1> : news.map((n) => 
                <div>
                    <NewsItem 
                        url = {n.url}
                        urlImg = {n.urlToImage}
                        title = {n.title}
                        description = {n.description}
                    />
                </div>
            )}
        </div>)
}

export default NewsList;