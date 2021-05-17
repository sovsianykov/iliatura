import React from 'react';
import { content }from '../../content'
import './style.scss'
import {Link} from "react-router-dom"
const Navigation = () => {
    return (
        <div className='nav'>
          <div className="nav_container">
              <h2>{content.nav.logo}<span className='dot'/></h2>
              <div>
                  {/*<ListItem component={Link} button to='/about' >About</ListItem>*/}
                  {content.nav.links.map((link,i) =>(
                      <Link to={link.to}  className='lnk'   key={i}>{link.text}</Link>
                  ))}
              </div>
          </div>
        </div>
    );
};

export default Navigation;
