import Movie from './Movie';
import React {Component} from 'react';
import '../css/MovieList.css';

class MovieList extends Component{
    render(){
    const { movies } = this.props;
    return (
        <div className="movie-list">
           {movies.map(movie => {
            <Movie key={movie.id} movie={movie} />
           })}
        </div>
    );
  }
}