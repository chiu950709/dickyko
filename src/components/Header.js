import React from 'react';
import config from '../config';

function Header() {
    return (
        <section id="header">
            <img class="logo" src={`${config.IMG.WEBSITE_IMG_PATH}`} alt="logo" width="170" height="70"/>
        </section>
      );
}

export default Header;