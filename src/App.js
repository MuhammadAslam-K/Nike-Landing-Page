import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home';
import Services from './Components/Pages/Services';
import Product from './Components/Pages/Product';
import Signup from './Components/Pages/Signup';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/services" element={<Services/>} />
      <Route exact path="/products" element={<Product/>} />
      <Route exact path="/sign-up" element={<Signup/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
