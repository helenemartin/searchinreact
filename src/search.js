import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import './styles/_search.scss';

class Search extends Component {
      constructor(props) {
        super(props);
        this.state = {
      searchTerm: "",
      
    };
    // this.termChanged= this.termChanged.bind(this) 
  }
    
    termChanged = (event) => {
    this.setState({
     searchTerm: event.target.value
    });

  }
   searchClicked = (event) => {
     this.props.performSearch(this.state.searchTerm);
     this.props.history.push("/search");
   }
  
    render() {
        return(
            <div className="search-container">
                <div className="search">
                    <input type="text" className="search-bar" placeholder="Search movies" 
                    value={this.state.searchTerm} onChange={this.termChanged}/>
                    <img className="search-icon" onClick={() => { this.searchClicked() }} src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
                </div>
            </div>
        );
        
    }
}

export default withRouter(Search);