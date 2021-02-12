// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />);
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};

export default MovieList;
