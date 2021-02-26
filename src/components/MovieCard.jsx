// implement MovieCard component here

import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie
    return (
      <div className='movie-card movie-card-body'>
        <img className='movie-card-image' src={imagePath} alt=''></img>
        <h4 className='movie-card-title'>{title}</h4>
        <h5 className='movie-card-subtitle'>{subtitle}</h5>
        <p className='movie-card-storyline'>{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
