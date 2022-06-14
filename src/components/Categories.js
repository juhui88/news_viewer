import React from "react";
import {Link} from "react-router-dom";

const categories = [
    {
        name: '',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }
]

const Categories = () => {
    
    return(
        <div>
            {categories.map(c =>(
                <Link to = {`/${c.name}`}>
                    <h2>{c.text}</h2>
                </Link>
                    
                ))}     
        </div>
        
    )
}

export default Categories;