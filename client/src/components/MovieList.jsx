import React, {Component} from 'react';
import Movie from './Movie.jsx';

class MovieList extends Component {
  render() {
    var eachVideo = this.props.listofmovies.map((video) =>
    <Movie video={video}/>
    );

    return (
      <div>{eachVideo}</div>
    )
  }
};

export default MovieList;