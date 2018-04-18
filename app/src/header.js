import React from 'react';
import './header.css';
import Search from './search.js';

const Header = (props) => {
      return (
            <header className="top">
                <h1>
                    Search the 
                    <span className=" the">
                        <span className="of"> Movie </span>
                        <span className="the"> Data</span>
                    </span>
                     base
                </h1>
                <Search performSearch={props.performSearch} />
            </header>
        );
};
      

export default Header;