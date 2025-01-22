import React, { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData.js';
import { Link } from 'react-router-dom';
import SearchFilter from './SearchFilter.jsx';
import MapComponent from './MapComponent.jsx';
import useDebounce from '../hooks/useDebounce.js'; // Import the debounce hook

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms debounce delay
  const { data, isLoading, error } = useFetchData('https://jsonplaceholder.typicode.com/users');

  if (isLoading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error-message">Error loading data</div>;

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1 className="home-title">User Directory</h1>
      <div className="search-filter">
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="users-list">
        {filteredData.length > 0 ? (
          filteredData.map((user) => (
            <li key={user.id} className="user-item">
              <Link to={`/details/${user.id}`} className="user-link">
                <div className="user-card">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>

      <div className="map-container">
        <MapComponent latitude={26.912434} longitude={75.787270} />
      </div>
    </div>
  );
};

export default HomePage;
