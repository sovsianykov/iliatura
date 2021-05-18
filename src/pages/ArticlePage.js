import React from 'react';
import './styles.scss';
import ArticleContent from './Article-content';
import { Typography } from "@material-ui/core";
const ArticlePage = ({ match }) => {
    const name = match.params.name
    const article= ArticleContent.find(article =>article.name === name)
    if (!article) return (<h1>Article do not exist!</h1>)
    return (
        <div className='container'>
            <Typography variant="h1">
                {article.title}
            </Typography>
            <Typography variant='body1'>
                {article.content.map((paragraph,i) =>(
                    <p key={i}>{paragraph}</p>
                ) )}

            </Typography>

        </div>
    );
};

export default ArticlePage;
