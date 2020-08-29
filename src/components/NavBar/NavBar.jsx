import React from 'react';
import navBar from './NavBar.module.css' 

function NavBar() {
    return (
        <nav className={navBar.nav}>
        <div className={navBar.item}>
          <a hef='#' className={navBar.item}>Account</a>
        </div>
        <div className={navBar.item}>
          <a hef='#'>Messages</a>
        </div>
        <div className={navBar.item}>
          <a hef='#'>News</a>
        </div>
        <div>
          <a hef='#' className={navBar.item}>Movies</a>
        </div>
        <div className={navBar.item}>
          <a hef='#'>Music</a>
        </div>
        <div className={navBar.item}>
          <a hef='#'>Settings</a>
        </div>
      </nav>
      );
}

export default NavBar;