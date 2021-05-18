import React from 'react';
import '../../pages/styles.scss';
import { Typography} from "@material-ui/core";
import ArticleContent from '../../pages/Article-content';
import {Link} from 'react-router-dom'

import './stele.scss';

const ArticlesList = () => {
    return (
      <div className='articles_list'>
          <div className='articles_list_container'>
              <Typography variant='h2' align='center' >Articles</Typography>
              {ArticleContent.map((article, key)=>(
                 <Link to ={`/article/${article.name}`} key={key} className='article'>
                     <h4   className='title'>
                         {article.title}
                     </h4>
                     <Typography variant='subtitle1' className='subText'>
                         {article.content[0].substring(0,200)}...
                     </Typography>
                 </Link>
              ))}
          </div>
      </div>
    );
};

export default ArticlesList;
