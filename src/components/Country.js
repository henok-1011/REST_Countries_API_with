import "./styles/country.css";
import React from "react";

export default function country({ country }) {
  return (
    <div className="country">
      <div className="img">
        <img alt="country__flag" src={country.flag} />
      </div>
      <div className="country__info">
        <h2>{country.name}</h2>
        <p>Population: {country.population.toLocaleString("en-US")}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
}
