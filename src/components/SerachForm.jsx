import React from 'react';

const SearchForm = props => (
  <form className="search-form" onChange={props.handleChange}>
    <label className="label-search-bar" htmlFor="search-bar">
      Enter a location
    </label>
    <input className="search-bar" name="search-bar" />
    <div className="sort-filter-options">
      <div className="radio-sort-order-container">
        <div className="radio-sort-order">
          <input type="radio" name="order" value="earliest" />
          Earliest - Latest
        </div>
        <div className="radio-sort-order">
          <input type="radio" name="order" value="latest" />
          Latest - Earliest
        </div>
      </div>
      <div className="filter-old">
        <input type="checkbox" name="filter-old" /> Old Events
      </div>
    </div>
  </form>
);

export default SearchForm;
