import React from 'react';
import './header.css';
import Search from './search.js';
import Filters from './Filters.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Header = (props) => {
    const showSortButton = props.movies.length > 0;
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
                <Switch>
                    <Route path="/:trackId" render={() => { return <a href="/">back</a>}}/>
                    <Route path="/" render={() => { 
                    
                    return (
                        <div>
                            <Search performSearch={props.performSearch} />
                            {
                                showSortButton && <Filters onSortByTitle={props.onSortByTitle} onSortByReleaseYear={props.onSortByReleaseYear} />
                            }
                            
                        </div>
                    )
                    
                        
                    }}/>
                </Switch>
            </header>
        );
};
      

export default Header;