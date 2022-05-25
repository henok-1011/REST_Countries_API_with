import Country from "./Country";
import "./styles/countryList.css";
import React from "react";
import { Link } from "react-router-dom";

export default function CountryList({ countries }) {
  return (
    <div className="country__list container">
      {countries?.map((country, index) => (
        <div className="country">
          <Link to={`/detail/${index}`}>
            <Country country={country} />
          </Link>
        </div>
      ))}
    </div>
  );
}
