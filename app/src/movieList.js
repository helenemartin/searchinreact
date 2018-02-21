import React from 'react';
import './movieList.css';
import Movie from "./movie.js"

export default class MovieList extends React.Component {
    render(){
    
    return(
      
       <div className="movieList">
      { this.props.movies.map(function(movie, index){
      return (
        
        <div className="movieListitem" >
          <div  key={index}>
              <Movie movie= {movie}/>
          </div>
        </div>
      )
    })
      }
    </div> 
      
    )
     
    }
}