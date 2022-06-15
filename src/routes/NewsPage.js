import React from "react";
import {useParams} from "react-router-dom";
import Categories from "../components/Categories";
import NewsList from "../components/NewList";

const NewsPage = () => {
    const {category} = useParams();
    
    return (
        <div>
            <Categories/>
            <NewsList category = {category}/>
        </div>
    )
}

export default NewsPage;