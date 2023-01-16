import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
