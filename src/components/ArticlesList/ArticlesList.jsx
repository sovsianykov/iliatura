import React from 'react';
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const ArticlesList = ({ articles }) => (
    <>
        {articles.map((article, key)=>(
            <Link to ={`/article/${article.name}`} key={key} className='article'>
                <h4   className='title'>
                    {article.title}
                </h4>
                <Typography variant='subtitle1' className='subText'>
                    {article.content[0].substring(0,200)}...
                </Typography>
            </Link>
        ))}
    </>
)



export default ArticlesList;