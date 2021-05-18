import React from 'react';
import Header from "../components/Header/Header";
import ArticlesList from "../components/ArticleList/ArticlesList";

const Homepage = () => {
    return (
        <div>
            <Header/>
            <ArticlesList/>
        </div>
    );
};

export default Homepage;