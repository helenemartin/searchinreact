import React from 'react';
import {Link} from "react-router-dom";

export default class Movie extends React.Component {
    render(){
        //console.log('hello', this.props.movie);
        return(

            <Link to={"/film/" + this.props.movie.trackId}>
                <img src={this.props.movie.artworkUrl100} alt=""/>
                <p>
                    {this.props.movie.trackName}
                <br/>
                    {this.props.movie.releaseDate.substring(0, 4)}
                </p>
            </Link>
    
            
        )
        
    }
}