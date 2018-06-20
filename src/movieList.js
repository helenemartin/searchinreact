import React from 'react';
import './movieList.css';
import Movie from "./movie.js";
import Filters from './Filters.js';
export default class MovieList extends React.Component {
    render(){
    const hasResults = this.props.movies.length > 0;
    return(
      <div>
        {
            hasResults && <Filters onSortByTitle={this.props.onSortByTitle} onSortByReleaseYear={this.props.onSortByReleaseYear} />
        }
         <div className="movieList">
        { this.props.movies.map(function(movie, index){
       
        return (
          
          <div className="movieListitem" key={movie.trackId} >
             
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