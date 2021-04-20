import { getcountry } from "../API";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { countryFadeIn, move } from "../animations";

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
    flag,
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

  return (
    <section>
      {Object.entries(country).length === 0 ? (
        <div className="text-center loading">Loading...</div>
      ) : (
        <div className="container">
          <Link to={"/"} aria-label="previous page">
            Back
          </Link>
          <motion.div
            className="row"
            variants={countryFadeIn}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="col-6" variants={move}>
              <picture>
                <img
                  className="img-fluid"
                  src={flag}
                  alt={name}
                />
              </picture>
            </motion.div>
            <motion.div className="col-6" variants={move}>
              <article>
                <h1>{name}</h1>
                <p>{nativeName}</p>
              </article>
            </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default CountryDetails;
