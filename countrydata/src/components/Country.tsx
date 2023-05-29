import { ICountry } from "../interfaces/Country";
import { useState } from 'react';
import WeatherCapital from "./WeatherCapital";

const Country = ({country, fromList}: {country: ICountry, fromList: boolean}) => {
  const [shownInfo, setShowInfo] = useState<boolean>(!fromList);

  return (
    <div key={country.name.common}>
      <div className="list-container">
        <h2>{country.name.common}</h2>
        {fromList?
        <button onClick={() => setShowInfo(!shownInfo)}>{shownInfo? 'unshow': 'show'}</button>:
        <></>}
      </div>
      {shownInfo?
      <>
        <ul>
          <h3>capital</h3>
          {Object.values(country.capital).map(cap => (
          <li key={cap}>{cap}</li>
          ))}
        </ul>
        <p><b>population</b> {country.population}</p>
        <ul>
          <h3>languages</h3>
          {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} />
        {country.capital.map(nameCapital => (
          <WeatherCapital key={nameCapital} nameCapital={nameCapital}/>
        ))}
        
      </>: <></>}
    </div>
  );
}

export default Country;