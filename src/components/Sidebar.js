import React from 'react';

function Sidebar() {
  const openPopup = (url) => {
    window.open(url, 'popup');
  };

  return (
    <header>
      <nav class="sidebar">
        <ol>
          <li><a href="about">About</a></li>
          <li><a href="experience">Experience</a></li>
          {
          //<li><a href="contact">Contact</a></li>
          }
          <li><a href="#!" onClick={() => openPopup('https://www.linkedin.com/in/dicky-ko-493053234/')}>Linkedin</a></li>
          <li><a href="#!" onClick={() => openPopup('https://drive.google.com/file/d/1iG5CH5W3yYwtPuRYQbAjfxGoU-E1sXtw/view?usp=sharing')}>Resume</a></li>
        </ol>
      </nav>
    </header>
  );
}

export default Sidebar;
