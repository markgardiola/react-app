import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <div className="nav-link disabled">
            <a className="navbar-brand text-success fw-light">Ala-Eh-scape</a>
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
              <li className="nav-item">
                <a
                  className="nav-link text-success fw-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success fw-light" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-success fw-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-link disabled">
                    <a className="dropdown-item text-success fw-light" href="#">
                      Staycation
                    </a>
                  </li>
                  <li className="nav-link disabled">
                    <a className="dropdown-item text-success fw-light" href="#">
                      Adventure
                    </a>
                  </li>
                  <li className="nav-link disabled">
                    <a className="dropdown-item text-success fw-light" href="#">
                      Camping
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <a className="btn btn-outline-success fw-light" href="#">
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
