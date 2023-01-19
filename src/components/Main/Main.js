import React from 'react';
import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard.js';
import { useState } from 'react';

export default function Main() {
  const { countries, error } = useCountries();
  const { continent, setContinent } = useState('all');
  const continents = [...new Set(countries.map(({ continent }) => continent))];
  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );
  return (
    // <main>
    //   <p>{error}</p>
    //   {countries.map((country) => (
    //     <CountryCard key={country.id} {...country} />
    //   ))}
    // </main>
    <main>
      <select onChange={(e) => setContinent(e.target.value)}>
        <option value="all">all</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}></option>
        ))}
      </select>
      <p>{error}</p>
      {filtered.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
