import React from 'react';
import { useCountries } from '../../hooks/useCountries';

export default function Main() {
  const countries = useCountries();
  return <main>something</main>;
}
