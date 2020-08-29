import React from 'react';
import headerClass from './Header.module.css'

function Header() {
    return (
      <header className={headerClass.header}>
        <img src='https://static1.squarespace.com/static/5488f2c1e4b0427fd09dd131/t/5f0f8bed1d6971551699447f/1594854383208/Logo-White-Circle-RGB_256px.png?format=1500w' className={headerClass.logo} />
      </header>
    );
}

export default Header;