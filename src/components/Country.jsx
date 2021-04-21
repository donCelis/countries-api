import { Link } from "react-router-dom";
import "../styles/country.css";

const Country = ({ name, flag, population, region, capital }) => {
  population = new Intl.NumberFormat("de-DE").format(Number(population));
  return (
    <Link className="card" to={`/country/${name}`} aria-label={name}>
      <img loading="lazy" src={flag} className="card-img-top" alt={name} />
      <div className="card-body">
        <h4 className="card-title mt-1 mb-3">{name}</h4>
        <p className="card-text">
          <strong>Population: </strong>
          {population}
        </p>
        <p className="card-text">
          <strong>Region: </strong>
          {region}
        </p>
        <p className="card-text">
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </Link>
  );
};
export default Country;
