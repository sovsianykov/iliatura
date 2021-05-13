import React from 'react';
import  heroImage from '../../assets/bg3.jpg'
import './style.scss'
import { Grid } from "@material-ui/core";





const Header = () => {

    return (
        <div className='header'>
            <div className='header_container'>
                <Grid container >
                    <Grid item xs={12} md={12} sm={12}>
                        <div className="pic_holder">
                            <img src={heroImage} alt='ava'/>
                        </div>
                    </Grid>
                    {/*<Grid item xs={12} md={8} sm={8} className='heroTxt'>*/}
                    {/*    <h1 className='name'>ILYA YERESKO</h1>*/}
                    {/*     <h2 className='description'>personal blog</h2>*/}
                    {/*</Grid>*/}

                </Grid>
            </div>

        </div>

    );
};

export default Header