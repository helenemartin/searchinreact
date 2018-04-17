import React, { Component } from 'react';
//import './App.css';
import MovieList from './movieList.js'
//import data from './data.json'
import axios from 'axios'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      data: [],
      sortBy: 'title'
    };
    // this.termChanged= this.termChanged.bind(this) 
  }
  sortByTitle(a,b) {
    if (a.trackName === b.trackName) {
      return 0;
    }
    
    return a.trackName < b.trackName? -1: 1;
  }
  
  sortByReleaseYear(a,b){
    const releaseYear_a = a.releaseDate;
    const releaseYear_b = b.releaseDate;
    
    if (releaseYear_a === releaseYear_b) {
      return 0;
    }
    
    return releaseYear_a < releaseYear_b? 1: -1;
    
  }
  onSortByReleaseYear = () => {
    const sortedDate = this.state.data.sort(this.sortByReleaseYear);
    this.setState({
      data: sortedDate,
      sortBy: 'releaseYear'
    });
  }
  
  onSortByTitle = () => {
    const sortedTitle = this.state.data.sort(this.sortByTitle);
    this.setState({
      data: sortedTitle,
      sortBy: 'title'
      
    });
    
  }
  
  termChanged = (event) => {
    this.setState({
      searchTerm: event.target.value
    });

  }
  searchClicked = (event) => {
    axios.get(`${window.location.protocol}//${window.location.hostname}:8081/movies?searchTerm=${this.state.searchTerm}`)
      .then((response) => {
        this.setState({
          data: response.data.results.sort(this.sortByTitle)
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <input type="text"  placeholder="search" value={this.state.searchTerm} onChange={this.termChanged}/>
        <button onClick={this.searchClicked}>Search</button>
        <MovieList movies={this.state.data} onSortByReleaseYear={this.onSortByReleaseYear} onSortByTitle={this.onSortByTitle} sortBy={this.state.sortBy}/>
      </div>
    );
  }
}
