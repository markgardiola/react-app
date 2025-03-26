import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container text-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="28"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          <div className="nav-link disabled">
            <a className="navbar-brand text-success fw-normal">Ala-Eh-scape</a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <Link to="/" className="nav-link text-success fw-light">
                <li className="nav-item">Home</li>
              </Link>
              <Link to="/about" className="nav-link text-success fw-light">
                <li className="nav-item">About</li>
              </Link>
              <Link
                to="/exploreResorts"
                className="nav-link text-success fw-light"
              >
                <li className="nav-item">Explore Resorts</li>
              </Link>
              <Link
                to="/chatWithSandyAI"
                className="nav-link text-success fw-light"
              >
                <li className="nav-item">Chat with Sandy AI</li>
              </Link>
            </ul>
            <Link to="/signIn">
              <a className="btn btn-outline-success fw-light">Sign In</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
