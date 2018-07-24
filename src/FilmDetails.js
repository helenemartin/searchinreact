import React from 'react';
import './FilmDetails.css';
import Spinner from './Spinner.js';
import axios from 'axios';


export default class FilmDetails extends React.Component {
    constructor() {
        super()
        
        this.state = {
            movie: {},
            movieHasLoaded: false
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
          movie: response.data.results[0],
          movieHasLoaded : true
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
    render(){
        return (
        <div className="filmdetails">
          {this.state.movieHasLoaded ? 
          <div className="filmdetailsbox">
              <div className="section">
                <div className="filmtitle">{this.state.movie.trackName}</div>
                <div className="director">{this.state.movie.artistName}</div>
                <p align="justify" className="synopsis">{this.state.movie.longDescription}</p>
              </div>
              <div className="section">
                <video src={this.state.movie.previewUrl} width="320px" height="240px" controls/>
              </div>
          </div>
          :
            <Spinner />
          }
        </div>
          )
      
      }
}