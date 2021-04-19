import "../styles/country.css";

const Card = ({ name, flag, population, region, capital }) => {
  population = new Intl.NumberFormat("de-DE").format(Number(population));
  return (
    <div className="card">
      <img src={flag} className="card-img-top" alt={name} />
      <div className="card-body">
        <h4 className="card-title mb-3">{name}</h4>
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
    </div>
  );
};
export default Card;
