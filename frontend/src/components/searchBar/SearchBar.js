import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useGlobalContext } from '../../AppContext';
import './SearchBar.css';

const SearchBar = () => {
  const { query, setQuery } = useGlobalContext();
  return (
    <>
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <div className="search__container">
          <AiOutlineSearch className="search__icon" />
          <input
            type="search"
            className="search__input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
