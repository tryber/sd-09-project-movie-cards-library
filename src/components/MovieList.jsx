// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      movies.map((movie, index) => (
        <MovieCard key={ `Movie Title ${ index + 1 }` } movie={ movie } />
      ))
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
    })
  )
}

export default MovieList;
