import React from 'react';
import '../../pages/styles.scss';
import {Typography} from "@material-ui/core";
import './stele.scss';

const ArticlesList = () => {
    return (
      <div className='articles_list'>
          <div className='articles_list_container'>
              <Typography variant="h2" align='center'>
                  Articles
              </Typography>
              <Typography variant='body1'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores aspernatur dolorum eos, facere iste iusto nam
                  optio quae qui veritatis! Aliquid, beatae dolor doloremque
                  dolores et iusto minima nam,
                  numquam obcaecati optio possimus quae quisquam rem repellat
                  rerum similique temporibus?
              </Typography>
          </div>
      </div>
    );
};

export default ArticlesList;