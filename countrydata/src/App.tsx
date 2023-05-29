import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICountry } from './interfaces/Country';
import Country from './components/Country';
import './App.css';

function App() {
  const [listCountries, setListCountries ] = useState<ICountry[]>([]);
  const [toSearch, setToSearch] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToSearch(input);
  };

  useEffect(() => {
    if (toSearch !== '') {
      axios
        .get(`https://restcountries.com/v3.1/name/${toSearch}?fields=name,capital,population,languages,flags`)
        .then(response => {
          if (response.data.length > 10) {
            setError('Too many countries, specify another filter');
            setListCountries([]);
          } else {
            setListCountries(response.data);
            setError(null);
          }
        })
        .catch(() => {
          setError('Country not found');
          setListCountries([]);
        });
    }
  }, [toSearch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="findCountry">find countries</label>
        <input 
          id="findCountry" 
          type="text" 
          value={input} 
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {
          error? 
          <p>{error}</p>:
          listCountries.length !== 1?
          listCountries.map( country => {
            const commonName = country.name.common;
            return(
            <li className='no-dots' key={commonName}>
              <Country country={country} fromList={true}/>
            </li>
          )}) :
          listCountries.map( country => (
              <Country key={country.name.common} country={country} fromList={false}/>
          ))
        }
      </ul>
      
    </>
  )
}

export default App
