import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useGlobalContext } from '../../AppContext';
import API from '../../utils/API';
import { Movies, Loader, Modal } from '../../components';
import './Home.css';

const Home = () => {
  const { loading, openModal } = useGlobalContext();
  const [movieDetails, setMovieDetails] = useState('');

  const getMovieById = async (movieID) => {
    try {
      const response = await API.get(`/movie/${movieID}`);
      if (response && response.status === 200) {
        setMovieDetails(response.data.data);
      }
    } catch (e) {
      console.log('error inside getMovieById:', e);
    }
    openModal();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Movies movieDetails={movieDetails} getMovieById={getMovieById} />
      <Modal>
        {movieDetails ? (
          <div className="modal__row">
            <img
              className="modal__poster"
              src={movieDetails.Poster}
              alt={movieDetails.Title}
            />
            <div className="modal__column">
              <p className="modal__title">Movie name:{movieDetails.Title}</p>
              <p>
                <span>Release date:</span> {movieDetails.Year}
              </p>
              <p>
                <span>Time:</span>
                {movieDetails.Runtime} long
              </p>
              <div className="modal_raiting">
                <span> IMDB Rating:</span>
                <AiFillStar className="modal_raiting_stars" />
                <span> {movieDetails.imdbRating}</span>
                <span className="modal_raiting_divisor"> /10</span>
              </div>
              <p>
                <span>Genre:</span> {movieDetails.Genre}
              </p>
              <p>
                <span>Director:</span> {movieDetails.Director}
              </p>
              <p>
                <span>Actors:</span> {movieDetails.Actors}
              </p>
              <p>
                <span>Plot:</span> {movieDetails.Plot}
              </p>
            </div>
          </div>
        ) : (
          <div className="modal__no--details">
            <p>Movie details not found</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Home;
