import React from 'react';
import './movieList.css';
import Movie from "./movie.js";

export default class MovieList extends React.Component {
    render(){
     const showSortButton = this.props.movies.length > 0;
      console.log(this.props.sortBy);
    return(
      <div>
        {showSortButton &&
        <div>
          <button onClick={this.props.onSortByTitle} style={{color:this.props.sortBy==='title'?'blue':'black'}}>Title</button>
          <button onClick={this.props.onSortByReleaseYear}>Release Year</button>
        </div>
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