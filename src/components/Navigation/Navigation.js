import React from 'react';
import { content }from '../../content'
import './style.scss'

const Navigation = () => {
    return (
        <div className='nav'>
          <div className="nav_container">
              <h2>{content.nav.logo}<span className='dot'/></h2>
              <div>
                  {content.nav.links.map((link,i) =>(
                      <div className='lnk' key={i}>{link.text}</div>
                  ))}
              </div>
          </div>
        </div>
    );
};

export default Navigation;