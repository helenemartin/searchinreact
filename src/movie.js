import React from 'react';
import {Link} from "react-router-dom";

export default class Movie extends React.Component {
    render(){
        //console.log('hello', this.props.movie);
        return(
            <div>
            <Link to={"/" + this.props.movie.trackId}>
                <p>
                    {this.props.movie.trackName}
                </p>
                <p>
                    {this.props.movie.releaseDate.substring(0, 4)}
                </p>
                <img src={this.props.movie.artworkUrl100} alt=""/>
            </Link>
            </div>
            
        )
        
    }
}