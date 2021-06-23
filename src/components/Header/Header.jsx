import React from 'react';
import  heroImage from '../../assets/bg4.jpg'
import './style.scss'
import { Grid } from "@material-ui/core";





const Header = () => {

    return (
        <div className='header'>
            <div className='header_container'>
                <Grid container >
                    <Grid item xs={12} md={12} sm={12}>
                        <div className="pic_holder">
                            <img src={ heroImage } alt='ava'/>
                            <div className="hero-text">
                                <div className="title"><h1>Ilya Yeresko</h1></div>
                                <div className="sub-title"><h4>composer, pianist</h4></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </div>

    );
};

export default Header