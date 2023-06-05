
import React, { useContext, useState } from 'react';
import { WeatherContext } from '../App';

const Search = () => {
  const { setSearchText, setWeatherData } = useContext(WeatherContext);
  const [searchInput, setSearchInput] = useState('');
  const [error, setError] = useState('');

  const handleSearchTextChange = (event) => {
    setSearchInput(event.target.value);
    setError('');
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();

    if (searchInput.trim() === '') {
      setError('Please enter a location');
      return;
    }

    setSearchText(searchInput.trim());
    setError('');
  };

  return (
    <div className="row justify-content-center my-3">
      <div className="col-md-6">
        <form className="d-flex" onSubmit={handleSearchFormSubmit}>
          <input
            className="form-control rounded-pill mr-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchInput}
            onChange={handleSearchTextChange}
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
        {error && <p className="text-danger mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Search;