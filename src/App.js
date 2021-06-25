import './index.css'
import Navbar from './components/navbarComponent/Navbar'
import Home from './components/HomeComponent/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './components/createComponent/Create'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
