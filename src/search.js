import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import './search.css';

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
            <div>
                <input type="text"  placeholder="search" value={this.state.searchTerm} onChange={this.termChanged}/>
                <button onClick={() => { this.searchClicked() }}>Search</button>
            </div>
        );
        
    }
}

export default withRouter(Search);