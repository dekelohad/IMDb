import React from 'react';
import { useGlobalContext } from '../../AppContext';
import './Movie.css';

const Movies = ({ getMovieById }) => {
  const { movies, error } = useGlobalContext();

  const pageTitleContent = error ? error : 'Popular Movies';
  const pageTitleClassName = error ? 'no--movies__title' : 'movies__title';

  return (
    <>
      <h2 className={pageTitleClassName}>{pageTitleContent}</h2>
      <section className={!error ? 'movies' : ''}>
        {!error &&
          movies.map((movie) => {
            const {
              imdbID: movieID,
              Poster: poster,
              Title: title,
              Year: year,
            } = movie;
            return (
              <article
                key={movieID}
                className="movie"
                onClick={() => getMovieById(movieID)}
              >
                <img src={poster} alt={title} />
                <div className="movie__info">
                  <h4 className="movie__title">{title}</h4>
                  <p className="movie__year">{year}</p>
                </div>
              </article>
            );
          })}
      </section>
    </>
  );
};

export default Movies;
