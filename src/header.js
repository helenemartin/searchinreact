import React from 'react';
import './header.css';
import logo from './img/boy-watching-film.jpg';
import Search from './search.js';


const Header = (props) => {
    const hasResults = props.movies.length > 0;
      return (
            <header className="head">
                
                        <div className="name">
                            <h1>Search the Movie database</h1>
                            <Search performSearch={props.performSearch} />
                        </div>
                
                
            </header>
        );
};
      

export default Header;