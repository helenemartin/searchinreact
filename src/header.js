import React from 'react';
import './header.css';
import logo from './img/boy-watching-film.jpg';
import Search from './search.js';


const Header = (props) => {
    const hasResults = props.movies.length > 0;
      return (
            <header className="head">
                <h1>Search the Movie database</h1>
            
                        <div>
                            <Search performSearch={props.performSearch} />
                            <img className="logo" src ={logo} alt="boy watching film" />
                        
                        </div>
                
                
            </header>
        );
};
      

export default Header;