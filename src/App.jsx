import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import myResume from "./resume/Thi-Dieu-Anh-Le-Resume.pdf";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">tdale</div>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about me</Link>
              </li>
              <li>
                <a href={myResume} target="_blank">
                  resume
                </a>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
