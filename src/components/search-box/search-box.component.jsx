import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      className='search'
      type='text'
      placeholder={placeholder}
    />
  );
};
