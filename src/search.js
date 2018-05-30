import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './search.css';

export default class Search extends Component {
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
  // searchClicked = (event) => {
  //   this.props.performSearch(this.state.searchTerm);
  // }
  
    render() {
        return(
            <div>
                <input type="text"  placeholder="search" value={this.state.searchTerm} onChange={this.termChanged}/>
                <button onClick={() => { this.props.performSearch(this.state.searchTerm) }}>Search</button>
            </div>
        );
        
    }
}