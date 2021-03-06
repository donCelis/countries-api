import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Header from '../components/Header'
import CountryDetails from '../pages/CountryDetails'
import Error404 from '../pages/Error404'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/country/:cname' component={CountryDetails} />
        <Route exact path='*' component={Error404} />
      </Switch>
    </Router>
  )
}

export default App
