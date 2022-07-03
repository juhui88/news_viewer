import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.a`
    height: 25vh;
    width: 50vw;
    display: flex;
    text-decoration: none;
    margin:5vh auto 10vh auto;
    
    img {
        width:20vw;
        height:25vh;
        object-fit:cover; 
    }
    &:hover {
        box-shadow: 0px 0px 20px rgb(103, 103, 103);
    }
`
const NewsInfo = styled.div`
    width:30vw;
`
const NewsTitle = styled.p`
    color: black;
    margin:10px;
    margin-top: 0;
    font-weight: bold;
    font-size: 20px;
    text-decoration: underline;
`

const NewsDes = styled.p`
    weight: 15vh;
    color: rgb(103, 103, 103);
    overflow: hidden;
    margin:10px;
`

const NewsItem = ({url,urlImg, title, description}) => {
    return (
        <NewsItemBlock href = {url}>
            <div>
                <img src = {urlImg}/>
            </div>
                
            <NewsInfo>
                <NewsTitle>{title}</NewsTitle>
                <NewsDes>{description}</NewsDes>
            </NewsInfo>
            
        </NewsItemBlock>
    )
}

export default NewsItem;