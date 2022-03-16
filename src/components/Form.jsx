import '../styles/form.css'
import { useGoblalContext } from '../context'

const Form = () => {
  const { countries, setFiltered } = useGoblalContext()

  const onFiltered = (e) => {
    e.preventDefault()
    const request = e.target.country.value
    const responseFilter = countries.filter((element) =>
      element.name.toLowerCase().match(request.toLowerCase())
    )
    setFiltered(responseFilter)
    e.target.reset()
  }

  return (
    <section className='search-form py-5'>
      <div className='container'>
        <form onSubmit={onFiltered}>
          <div className='input-group'>
            <span className='input-group-text'>🔍</span>
            <input
              type='text'
              autoComplete='off'
              name='country'
              placeholder='Search for a country...'
              className='form-control'
            />
            <button className='btn btn-dark text-light' type='submit'>
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form
