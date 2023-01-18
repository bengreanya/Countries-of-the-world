import React from 'react';
export default function CountryCard({ name }) {
  return (
    <div className="country-card">
      <h2 className="name">{name}</h2>
    </div>
  );
}
