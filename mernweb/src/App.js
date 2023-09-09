import logo from './logo.svg';
import './App.css';
// if I put it to NaVbar then it works but 
import Navbar from './components/NaVbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'

// or can do brower route to route
function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Route exact path= "/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Router>

    </>
  );
}

export default App;
