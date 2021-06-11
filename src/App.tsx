import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/App.css";
import { CountryType } from "./types";
import CountryCard from "./components/CountryCard";

const App = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("Turkey");
  const [isError, setIsError] = useState<boolean>(false);


  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${searchValue}`)
      .then((res) => {
        setCountries(res.data);
        setIsError(false);
      })
      .catch((err) => setIsError(true));
  }, [searchValue]);

  return (
    <div className="app">
      <h1 className='app__title'>Search Country</h1>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search Country"
      />
      <div className="app__countries">
        {isError ? (
          <h2>Not Found Countries</h2>
        ) : (
          <div className='app__countries__country'>
            {countries.map((item) => (
              <CountryCard key={item.name} country={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
