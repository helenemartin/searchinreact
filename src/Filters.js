import React, { Component } from 'react';
import './Filters.css';

const Filters = (props) => {
      return (
        <div className="moviefilter">
          <button className={props.sortBy === 'title' ? "activefilter" : "title" } 
          onClick={props.onSortByTitle} >Title</button>
          <button className={props.sortBy === 'releaseYear' ? "activefilter" : "year" } 
          onClick={props.onSortByReleaseYear}>Release Year</button>
        </div>
        );
};
      

export default Filters;