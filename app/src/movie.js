var React = require('react');

export default class Movie extends React.Component {
    render(){
        
        return(
            <div>
                <p>
                    {this.props.movie.trackName}
                </p>
                <p>
                    {this.props.movie.releaseDate.substring(0, 4)}
                </p>
                <img src={this.props.movie.artworkUrl100} alt=""/>
            </div>
            
        )
        
    }
}