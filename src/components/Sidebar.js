import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

function Sidebar() {
  /*const openPopup = (url) => {
    window.open(url, 'popup');
  };*/

  return (
    <header>
      <nav class="sidebar">
        <ol>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          {
          //<li><a href="contact">Contact</a></li>
          //<li><a href="#!" onClick={() => openPopup('https://www.linkedin.com/in/dicky-ko-493053234/')}>Linkedin</a></li>
          //<li><a href="#!" onClick={() => openPopup('https://drive.google.com/file/d/1iG5CH5W3yYwtPuRYQbAjfxGoU-E1sXtw/view?usp=sharing')}>Resume</a></li>
          //<li><a href="#!" onClick={() => openPopup('https://github.com/chiu950709?tab=repositories')}>GitHub</a></li>
          }
          <li><a href={`${config.LINK.LINKEDIN}`} target="_blank" rel="noopener noreferrer" >Linkedin</a></li>
          <li><a href={`${config.LINK.RESUME}`} target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href={`${config.LINK.GITHUB}`} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ol>
      </nav>
    </header>
  );
}

export default Sidebar;
