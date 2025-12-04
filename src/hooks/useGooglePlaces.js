// src/hooks/useGooglePlaces.js
import { useState, useEffect } from 'react';

export default function useGooglePlaces({ query, lat, lng, radius = 5000 }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || !window.google) return;
    setLoading(true);

    const service = new window.google.maps.places.PlacesService(
      document.createElement('div') // invisible container
    );

    const request = {
      location: new window.google.maps.LatLng(lat, lng),
      radius,
      keyword: query,
    };

    service.nearbySearch(request, (res, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setResults(res.map(p => ({
          place_id: p.place_id,
          name: p.name,
          lat: p.geometry.location.lat(),
          lng: p.geometry.location.lng(),
          rating: p.rating || null,
          formatted_address: p.vicinity || '',
        })));
      }
      setLoading(false);
    });
  }, [query, lat, lng, radius]);

  return { results, loading };
}
