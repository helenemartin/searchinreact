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
        return <div>{this.state.movie.trackName}</div>
    
     
    }
}