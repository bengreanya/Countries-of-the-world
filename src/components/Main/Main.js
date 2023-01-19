import React from 'react';
import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard.js';

export default function Main() {
  const { countries, error } = useCountries();
  return (
    <main>
      <p>{error}</p>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
