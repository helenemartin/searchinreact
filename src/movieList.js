import React from 'react';
import Movie from "./movie.js";
import Filters from './Filters.js';
export default class MovieList extends React.Component {
    render(){
    const hasResults = this.props.movies.length > 0;
    return(
      <div className="gradient">
        {
            hasResults && <Filters 
            onSortByTitle={this.props.onSortByTitle} 
            onSortByReleaseYear={this.props.onSortByReleaseYear} 
            sortBy={this.props.sortBy}/>
        }
         <div className="movie-list">
        { this.props.movies.map(function(movie, index){
       
        return (
          
          <div className="movie-list-item" key={movie.trackId} >
             
                <Movie movie={movie}/>
            
          </div>
        );
       })
      }
    </div> 
    </div>
    );
     
    }
}