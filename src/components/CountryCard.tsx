import React from "react";
import "../styles/CountryCard.css";
import { CountryType } from "../types";

interface PropsTypes {
  country: CountryType;
}

const CountryCard: React.FC<PropsTypes> = (props) => {
  return (
    <div>
      {props.country && (
        <div className="card">
          <img
            className="card__image"
            alt="country-logo"
            src={props.country.flag}
          />
          <div className='card__infos'>
          <h3>{props.country.name}</h3>
          {props.country.capital && <p>Capital : {props.country.capital}</p>}
          {props.country.population && <p>Population : {props.country.population} people</p>}
          {props.country?.currencies[0] && <p>Currency Unit : {props.country.currencies[0].name} ({props.country.currencies[0].code}) </p>}
          {props.country.demonym && <p>Nation : {props.country.demonym}</p>}
          {props.country.subregion && <p>Region : {props.country.subregion}</p>}


          </div>
        </div>
      )}
    </div>
  );
};

export default CountryCard;
