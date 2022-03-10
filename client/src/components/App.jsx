import React, {Component} from 'react';
import MovieList from './MovieList.jsx';
import Search  from './Search.jsx';
import AddMovieTitle from './AddMovieTitle.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: movies
    }
  }

  render() {
    return (
      <div>
        <h1>MovieList</h1>
        <div>
          <div className="AddMovie"><AddMovieTitle /> </div>
            <div className="Search"><Search />
              </div>
            <div className="movieList"><MovieList listofmovies={this.state.movies} />
            </div>
          </div>
      </div>
    )
  }
}

export default App;