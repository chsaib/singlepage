import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Service">Service</Link>
            </li>
            <li>
              <Link to="About">About </Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="Home" element={<Home />} />
          <Route exact path="About" element={<About />} />
          <Route exact path="Service" element={<Service />} />
          <Route exact path="Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
