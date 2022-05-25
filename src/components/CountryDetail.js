import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles/countryDetail.css";

export default function CountryDetail({ count }) {
  let { index } = useParams();
  let i;

  return (
    <div className="details container">
      <div className="back__div">
        <Link to="/">
          <h1 className="back">Back</h1>
        </Link>
      </div>
      <div className="count">
        <div className="flag">
          {count ? <img alt="flag" src={count[index].flag} /> : <div></div>}
        </div>
        <div className="info">
          {count ? (
            <>
              {" "}
              <h1 className="country__name">{count[index].name}</h1>
              <div className="more">
                <div>
                  <h1>Native Name:{count[index].nativeName}</h1>
                  <h1>
                    Population:{count[index].population.toLocaleString("en-US")}
                  </h1>
                  <h1>Region:{count[index].region}</h1>
                  <h1>Sub-region:{count[index].subregion}</h1>
                  <h1>Capital:{count[index].capital}</h1>
                </div>
                <div>
                  <h1>Top Level Domain:{count[index].topLevelDomain}</h1>
                  <h1>Currency:{count[index].currencies[0].symbol}</h1>
                  <h1>
                    Lanuage:
                    {count[index].languages.map((lan) => {
                      return lan.name;
                    })}
                  </h1>
                </div>
              </div>
              <div className="country__borders">
                <h1>Borders:</h1>{" "}
                {count[index].borders?.map((b) => (
                  <>
                    {count.map((c, index) => {
                      if (c.alpha3Code === b) {
                        i = index;
                      }
                    })}
                    <Link to={`/detail/${i}`}>
                      <div className="borders">
                        <h1>{b}</h1>
                      </div>
                    </Link>
                  </>
                ))}
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
