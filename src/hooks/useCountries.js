import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/fetchCountries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (e) {
        setError('Whoopsies');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}
