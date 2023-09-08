import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Route exact path= "/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Services} />
      <Route exact path="/contact" component={Contact} />
    </Router>

    </>
  );
}

export default App;
