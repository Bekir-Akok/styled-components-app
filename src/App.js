import { Navbar, Footer } from './components'
import GlobalStyle from './globalStyles'
import Home  from './pages/HomePage/Home'
import Products  from './pages/Products/Products'
import Services  from './pages/Services/Services'
import SignUp  from './pages/SignUp/SignUp'
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyle />
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
