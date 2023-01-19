import React from 'react';
import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard.js';
import { useState } from 'react';

export default function Main() {
  const { countries, error } = useCountries();
  //   const { continent, setContinent } = useState('all');
  //   const continents = [...new Set(countries.map(({ continent }) => continent))];
  //   const filtered = countries.filter((countries) => );
  return (
    <main>
      <p>{error}</p>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
    // <main>
    //   <select onChange={(e) => setContinent(e.target.value)}>
    //     <option value="all">all</option>
    //     {continent.map((type) => (
    //       <option key={continent} value={continent}>
    //         {continent}
    //       </option>
    //     ))}
    //   </select>
    //   <p>{error}</p>
    //   {filtered.map((continent) => (
    //     <CountryCard key={countries.name} {...countries} />
    //   ))}
    // </main>
  );
}
