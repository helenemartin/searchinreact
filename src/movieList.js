import React from 'react';
import './movieList.css';
import Movie from "./movie.js";

export default class MovieList extends React.Component {
    render(){

    return(
      <div>
        
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