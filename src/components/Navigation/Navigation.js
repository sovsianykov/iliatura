import React from 'react';
import { content }from '../../content'
import './style.scss'
import {Link} from "react-router-dom"
const Navigation = () => {
    return (
        <div className='nav'>
          <div className="nav_container">
              <Link to ='/'  className='lnk'  >
                  <h2>{content.nav.logo}<span className='dot'/></h2>
              </Link>
              {/*<Link  to='/new-article/' className='lnk-new-art'>new article</Link>*/}
              <div>
                  {content.nav.links.map((link,i) =>(
                      <Link to={link.to}  className='lnk'   key={i}>{link.text}</Link>
                  ))}
              </div>
          </div>
        </div>
    );
};

export default Navigation;
