import React from "react";
import {NavLink} from "react-router-dom";
import "./Categories.css"

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
        <div className="categories">
            <div className = "category">
                {categories.map(c =>(
                    <NavLink to = {`/${c.name}`} className="category_text" activeClassName = "active" >
                        {c.text}
                    </NavLink>

                    ))} 
            </div>
                   
        </div>
        
    )
}

export default Categories;