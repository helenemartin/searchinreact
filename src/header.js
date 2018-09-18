import React from 'react';
import logo from './img/boy-watching-film.jpg';
import Search from './search.js';

export default class Header extends React.Component {
      


    render() {
        const hasResults = this.props.movies.length > 0;
        return(
            <header className="head">
                    
                <div className="name">
                    <h1>Search the Movie database</h1>
                    <Search performSearch={this.props.performSearch}
                    doScroll={this.scroll} />
                </div>
    
                </header>
           
        )}
        
    }
  