import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MapComponent from "./MapComponent";

const DetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (err) {
        setError("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="details-container">
      <h1>User Details</h1>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </p>
          <h3>Address:</h3>
          <p>
            {user.address.street}, {user.address.city}, {user.address.zipcode}
          </p>
          {user.address.geo && (
            <div className="map-container">
              <h3>Location:</h3>
              <MapComponent
                latitude={parseFloat(user.address.geo.lat)}
                longitude={parseFloat(user.address.geo.lng)}
              />
            </div>
          )}
        </div>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};

export default DetailsPage;
