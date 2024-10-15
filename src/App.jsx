import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import myLogo from "./assets/my-logo-loop-one.gif";
import About from "./components/About";
import Home from "./components/Home";
import myResume from "./resume/Thi-Dieu-Anh-Le-Resume.pdf";

function App() {
  const [gifSrc, setGifSrc] = useState(myLogo);
  function restartGif(e) {
    setGifSrc("");
    setTimeout(() => {
      setGifSrc(myLogo);
    }, 0);
  }

  return (
    <Router>
      <div className="App">
        <header className="header">
          <img src={gifSrc} onClick={restartGif} className="my-logo" />
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={restartGif} className="my-link">
                  home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={restartGif} className="my-link">
                  about me
                </Link>
              </li>
              <li>
                <a
                  href={myResume}
                  onClick={restartGif}
                  target="_blank"
                  className="my-link"
                >
                  resume
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
