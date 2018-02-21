import React, { Component } from 'react';
//import './App.css';
import MovieList from './movieList.js'
import data from './data.json'


export default class App extends Component {
  render() {
    return (
      <div>
        <MovieList movies={data.results} />
      </div>
    );
  }
}