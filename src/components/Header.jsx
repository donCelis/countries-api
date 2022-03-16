import '../styles/header.css'

const Header = () => {
  return (
    <header className='py-4'>
      <div className='container'>
        <section className='d-flex'>
          <h4 className='m-0'>Where in the world?</h4>
          <button className='m-0 btn btn-info'>Dark Mode</button>
        </section>
      </div>
    </header>
  )
}

export default Header
