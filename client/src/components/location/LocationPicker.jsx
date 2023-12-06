import React, { useState } from 'react';

const LocationPicker = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  const handleGetLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (geoPosition) => {
          setPosition({
            latitude: geoPosition.coords.latitude,
            longitude: geoPosition.coords.longitude,
          });
          setError(null);
        },
        (geoError) => {
          setError(geoError.message);
          setPosition(null);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
      setPosition(null);
    }
  };

  return (
    <div>
      <button
        onClick={handleGetLocation}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md focus:outline-none"
      >
        Get My Location
      </button>
      {position && (
        <div className="mt-4">
          <strong>Your Location:</strong>{' '}
          {`Latitude: ${position.latitude}, Longitude: ${position.longitude}`}
        </div>
      )}
      {error && <div className="text-red-600 mt-4">{error}</div>}
    </div>
  );
};

export default LocationPicker;
