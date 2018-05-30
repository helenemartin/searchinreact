import React, { Component } from 'react';
import './Filters.css';

const Filters = (props) => {
      return (
        <div>
          <button className="title" onClick={props.onSortByTitle} style={{color:props.sortBy==='title'?'blue':'black'}}>Title</button>
          <button className="year" onClick={props.onSortByReleaseYear}>Release Year</button>
        </div>
        );
};
      

export default Filters;