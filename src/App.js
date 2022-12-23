import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Component/Countries/Countries';
import Search from './Component/Search/Search';
const url = 'https://restcountries.com/v3.1/all'

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countries);

  const dataFetch = async (url) => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data);
      setLoading(false);
      setError(null);
    }catch (error){
      setLoading(false);
      setError(error);
    }
  };

  useEffect(()=>{
    dataFetch(url)
  },[]);

  const removeCountry = (name) => {
    const filteredCountry = filterCountries.filter((country) => country.name.common !== name)
    setFilterCountries(filteredCountry);
  }

  const searchCountry = (searchName) => {
    const value = searchName.toLowerCase();
    const allCountry = countries.filter((country) => {
      const name = country.name.common.toLowerCase();
      return name.startsWith(value);
    })
    setFilterCountries(allCountry);
  }

  return (
    <section className='container'>
      <h2>Country App</h2>
      <Search onSearch={searchCountry}/>
      {loading && <h3>Loading....</h3>}
      {error && <h3>{error.message}</h3>}
      {countries && <Countries onRemove={removeCountry} countries={filterCountries}/>}
    </section>
  );
}

export default App;
