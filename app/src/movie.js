var React = require('react');

export default class Movie extends React.Component {
    render(){
        return(
            <div>
                <p>
                    {this.props.movie.trackName}
                </p>
                <img src={this.props.movie.artworkUrl100} alt=""/>
            </div>
            
        )
        
    }
}