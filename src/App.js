import React, { Component } from 'react';
import './App.css';
import MovieList from './movieList.js';
// import Movie from './movie.js';
import FilmDetails from './FilmDetails.js';
//import data from './data.json';
import axios from 'axios';
import Header from './header.js';
import { Redirect} from 'react-router';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { findDOMNode} from 'react-dom';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      data: [],
      sortBy: 'title'
    };
    //target Header in setTimeOut within the render function
    this.Header = React.createRef();
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
    console.log("hello");
    const sortedTitle = this.state.data.sort(this.sortByTitle);
    this.setState({
      data: sortedTitle,
      sortBy: 'title'
      
    });
    
  }
  

  performSearch = (searchTerm) => {
    
  
    axios.get(`https://itunes.apple.com/search?entity=movie&term=${searchTerm}`)
      .then((response) => {
        console.log('Hello', response);
        this.setState({
          data: response.data.results.sort(this.sortByTitle)
        },() => {
          console.log("Loaded",);
          //finding the dom node to run the window to scroll event
            setTimeout( () => {
                var node = findDOMNode(this.Header.current);
                var height = node.getBoundingClientRect().height;
             window.scrollTo({top:height, behavior:"smooth"});
    
            console.log("Scrolled");
         },2);
        });
      // .doScroll(response) => {
      //   console.log('Hello', response);
      //   //this
      // }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <Router>
        <div>
          <Header performSearch={this.performSearch} movies={this.state.data}
            ref = {this.Header}
          />
          <Switch >
          <Route exact path="/search" render={() => 
          <MovieList 
            movies={this.state.data} 
            onSortByReleaseYear={this.onSortByReleaseYear} 
            onSortByTitle={this.onSortByTitle} 
            sortBy={this.state.sortBy}/>}
          />
          
           
              
          <Route path="/film/:trackId" render={(props) => { 
          console.log("props", props);
             {/* {this.state.data.length ? (<Redirect to='/:trackId' />): null} */}
          // var trackName = props.match.params.trackName;
          // console.log('trackName', trackName)
          // //look here
          // this.performSearch(trackName)
          // // const movie= this.state.data.find(x=> x.trackId === props.match.params.id)
          // console.log('this one', movie)
           //return props.match.params.id
            
            return <FilmDetails/>;
          }} />
          </Switch>
          
        </div>
      </Router>
    );
  }
}

