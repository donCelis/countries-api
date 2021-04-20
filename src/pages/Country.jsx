import { getcountry } from "../API";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { countryFadeIn, move } from "../animations";

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await getcountry(name);
      setCountry(response[0]);
    };
    getData();
  }, []);

  return (
    <section>
      {Object.entries(country).length === 0 ? (
        <div className="text-center text-light">Loading...</div>
      ) : (
        <div className="container">
          <Link to={"/"}>Back</Link>
          <motion.div
            className="row"
            variants={countryFadeIn}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="col-6" variants={move}>
              <div>
                <img
                  className="img-fluid"
                  src={country.flag}
                  alt={country.name}
                />
              </div>
            </motion.div>
            <motion.div className="col-6" variants={move}>
              <div>
                <h1 className="text-light">{country.name}</h1>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Country;
