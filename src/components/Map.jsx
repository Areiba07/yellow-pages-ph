import React, { useEffect, useRef } from 'react';

export default function Map({ businesses }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 14.6091, lng: 121.0223 }, // Metro Manila
      zoom: 12,
    });

    businesses.forEach(b => {
      if (!b.lat || !b.lng) return;
      new window.google.maps.Marker({
        position: { lat: b.lat, lng: b.lng },
        map,
        title: b.name,
      });
    });
  }, [businesses]);

  return <div ref={mapRef} className="map-container w-100" />;
}
