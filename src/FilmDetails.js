import React from 'react';
import './FilmDetails.css';
import axios from 'axios';


export default class FilmDetails extends React.Component {
    constructor() {
        super()
        
        this.state = {
            movie: {}
        }
    }
    
    componentWillMount(){
        // debugger
        var trackId = window.location.pathname.split('/').pop()
           
          
          this.performSearch(trackId)
    }
    
      performSearch = (searchTerm) => {
  
    axios.get(`https://itunes.apple.com/lookup?id=${searchTerm}`)
      .then((response) => {
        console.log('res',response)
        this.setState({
          movie: response.data.results[0]
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
    render(){
        return (
        <div>
        <h1>{this.state.movie.trackName}</h1>
        <h2>{this.state.movie.artistName}</h2>
        <p>{this.state.movie.longDescription}</p>
        <video src={this.state.movie.previewUrl} width="320px" height="240px" controls/>
        
          </div>
          )
      
       
      }
}