import './index.css'
import Navbar from './components/navbarComponent/Navbar'
import Home from './components/HomeComponent/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App
