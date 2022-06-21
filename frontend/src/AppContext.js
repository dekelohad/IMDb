import React, { useState, useContext, useEffect } from 'react';
import API from './utils/API';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchMovies = async () => {
        try {
          setLoading(true);
          const response = await API.get(`/movies/${query}`);
          const moviesFound = response.data.data.Search.length;

          if (moviesFound) {
            setMovies(response.data.data.Search);
            setError(false);
          }
        } catch (e) {
          setError('No movie found');
          setMovies([]);
        } finally {
          setLoading(false);
        }
      };
      fetchMovies();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        movies,
        query,
        error,
        loading,
        setLoading,
        isModalOpen,
        setIsModalOpen,
        openModal,
        closeModal,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
