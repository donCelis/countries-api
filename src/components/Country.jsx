import { Link } from 'react-router-dom'
import '../styles/country.css'

const Country = ({ name, flags, population, region, capital }) => {
  return (
    <Link
      className='card'
      to={`/country/${name.common}`}
      aria-label={name.common}
    >
      <img
        loading='lazy'
        src={flags.svg}
        className='card-img-top'
        alt={name.official}
      />
      <div className='card-body'>
        <h4 className='card-title mt-1 mb-3'>{name.common}</h4>
        <p className='card-text'>
          <strong>Population: </strong>
          {population.toLocaleString('de-DE')}
        </p>
        <p className='card-text'>
          <strong>Region: </strong>
          {region}
        </p>
        <p className='card-text'>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </Link>
  )
}
export default Country
