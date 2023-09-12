import logo from './logo.svg';
import './App.css';
import Home from './Components/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './Components/footer';
import Navbar from './Components/navbar';
import About from './Components/about';
import Contact from './Components/contact';

function App() {
  return (
  
    <Router>
   
   <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>

<Footer/>
     
    </Router>
 
  );
}

export default App;
