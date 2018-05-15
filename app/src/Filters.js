import React, { Component } from 'react';
import './Filters.css';

const Filters = (props) => {
      return (
        <div>
          <button onClick={props.onSortByTitle} style={{color:props.sortBy==='title'?'blue':'black'}}>Title</button>
          <button onClick={props.onSortByReleaseYear}>Release Year</button>
        </div>
        );
};
      

export default Filters;