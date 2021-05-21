import React from 'react';
import '../components/ArticleListPage/stele.scss';
import ArticleContent from './Article-content';
import { Typography } from "@material-ui/core";
import ArticlesList from "../components/ArticlesList/ArticlesList";

const ArticlePage = ({ match }) => {
    const name = match.params.name
    const article= ArticleContent.find(article =>article.name === name)
    if (!article) return (<h1>Article do not exist!</h1>)
    const otherArticles = ArticleContent.filter(article => article.name !== name)
    return (
        <div className='articles_list' style={{marginTop : "10vh"}}>
            <div className='articles_list_container'>
            <Typography variant="h1">
                {article.title}
            </Typography>

            <Typography variant='body1'>
                {article.content.map((paragraph,i) =>(
                    <p key={i}>{paragraph}</p>
                ) )}
            </Typography>
                <h3 style={{marginTop : "10vh"}}>Other Articles</h3>
            <ArticlesList articles={otherArticles}/>
            </div>
        </div>
    );
};

export default ArticlePage;
