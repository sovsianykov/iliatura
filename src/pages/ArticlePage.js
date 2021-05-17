import React from 'react';
import './styles.scss';
import {Typography} from "@material-ui/core";
const ArticlePage = () => {
    return (
        <div className='container'>
            <Typography variant="h1">
                This is an Article
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
    );
};

export default ArticlePage;