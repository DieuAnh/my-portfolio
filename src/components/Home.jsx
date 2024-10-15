import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <p className="description">
          Hi, I'm Anh <i className="fa-regular fa-hand-peace icon-hi"></i>
        </p>
        <p className="description-big">I'm a full-stack web developer</p>
        <p className="description">
          I build web applications{" "}
          <Link to="/about" className="button-link">
            <i className="arrow fas fa-arrow-circle-right"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
