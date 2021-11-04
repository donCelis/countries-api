import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { getcountry } from "../API";

import "../styles/countryDetails.css";

const CountryDetails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await getcountry(name);
      setCountry(response[0]);
    };
    getData();
  }, [name]);

  const {
    flags,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  return Object.entries(country).length === 0 ? (
    <div className="text-center loading py-5">Loading...</div>
  ) : (
    <section className="country-details">
      <div className="container">
        <div className="row">
          <div className="my-5">
            <Link className="btn-back" to={"/"} aria-label="previous page">
              Back
            </Link>
          </div>
        </div>
        <div className="row gx-md-5 gy-5 gy-lg-0 align-items-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div>
              <img className="flag img-fluid" src={flags.svg} alt={name} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <article>
              <h3>{name}</h3>
              <div className="row my-5">
                <div className="col-6">
                  <div>
                    <p>
                      <strong>native name: </strong>
                      {nativeName}
                    </p>
                    <p>
                      <strong>population: </strong>
                      {population.toLocaleString("de-DE")}
                    </p>
                    <p>
                      <strong>region: </strong>
                      {region}
                    </p>
                    <p>
                      <strong>subregion: </strong>
                      {subregion}
                    </p>
                    <p>
                      <strong>capital: </strong>
                      {capital}
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <p>
                      <strong>top level domain: </strong>
                      {topLevelDomain}
                    </p>
                    <p>
                      <strong>currencies: </strong>
                      {currencies[0].code}
                    </p>
                    <p>
                      <strong>currencies: </strong>
                      {languages[0].name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div>
                  <p>Border Countries: </p>
                  {borders.length === 0 ? (
                    <p>No borders</p>
                  ) : (
                    <ul className="borders-list">
                      {borders.map((element, id) => (
                        <li key={id}>{element}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
