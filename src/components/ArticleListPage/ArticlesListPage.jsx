import React from 'react';
import '../../pages/styles.scss';
import { Typography} from "@material-ui/core";
import ArticlesList from "../ArticlesList/ArticlesList";
import articleContent from '../../pages/Article-content'

import './stele.scss';

const ArticlesListPage = () => {
    return (
      <div className='articles_list'>
          <div className='articles_list_container'>
              <Typography variant='h2' align='center'  >Articles</Typography>
              <ArticlesList articles={ articleContent  }/>
          </div>
      </div>
    );
};

export default ArticlesListPage;
