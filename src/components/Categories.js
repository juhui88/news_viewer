import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

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

const CategoriesBlock = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    height: 8vh;
`
const CategoryItem = styled.div`
    margin: 1vh;
    font-size: 20px;
    margin: 0 auto;
    text-decoration: none;
    
    .category-text {
        text-decoration: none;
        margin: 1vh;
        color: black;
        font-weight: bold;
        &:hover {
            color: rgb(49, 187, 238);
        }
    }
    .active {
        color: rgb(49, 187, 238);
        text-decoration: underline;
    }
`
const Categories = () => {
    return(
        <CategoriesBlock>
            <CategoryItem>
                {categories.map(c =>(
                    <NavLink to = {`/${c.name}`} className="category-text" activeClassName = "active" >
                        {c.text}
                    </NavLink>

                    ))} 
            </CategoryItem>
                   
        </CategoriesBlock>
        
    )
}

export default Categories;