import React from 'react';

const SearchFilter = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search users"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default SearchFilter;
