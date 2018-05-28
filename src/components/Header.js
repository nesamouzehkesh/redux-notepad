import React from 'react';

const Header = ({ name }) => {
  return (
    <div className="navbar-fixed">
      <nav className="teal lighten-2">
        <div className="nav-wrapper">
          <div className="brand-logo center">{name}'s Notepad</div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
