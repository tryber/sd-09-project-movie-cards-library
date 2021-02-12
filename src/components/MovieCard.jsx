// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="Movie Poster" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.object({
      title: PropTypes.string,
      subtitle: Proptypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: Proptypes.string,
    }),
  ).isRequired,
};

export default MovieCard;
