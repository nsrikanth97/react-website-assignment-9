import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { LoginPage } from "./Login/login_page";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "./home/home_page";
import { ContactUs } from "./contactUs/contactUs";
import { AboutUs } from "./aboutus/aboutus_page";
import { Jobs } from "./jobs/jobs_page";
import { useStateContext } from "./context/StateContext";
import { useState } from "react";

function App() {
  const { loginState, fullName, setLoginState,subscribe,setSubscribe } = useStateContext();
  

  let navigate = useNavigate();
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Restaurant Name/Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {loginState && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/aboutUs">
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/jobs">
                      Careers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ContactUs">
                      Contact
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex">
              {!loginState && (
                <li className="nav-item">
                  <button className="btn btn-primary" type="submit">
                    <Link
                      to="/login"
                      className="text-decoration-none text-white"
                    >
                      Singup/Login
                    </Link>
                  </button>
                </li>
              )}
              {loginState && (
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {fullName}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li className="nav-item">
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          setLoginState(false);
                          navigate("/login");
                        }}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>

      <footer className="py-3 navbar-dark bg-dark container-fluid">
        {subscribe ? <div className="text-center border-bottom pb-3">
          <p className="text-white">Thank you for subscribing to news letter</p>
        </div> : <form
          className="form-group row justify-content-center border-bottom pb-3"
          onSubmit={(e) => {
            e.preventDefault();
            setSubscribe(true);
          }}
        >
          <label
            htmlFor="staticEmail"
            className="col-sm-2 col-form-label text-white"
          >
            Subscribe to our news letter
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              placeholder="email@example.com"
            />
          </div>
          <div className="col-sm-2">
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </div>
        </form>
        }

        <p className="text-center text-muted">© 2022 Company, Inc</p>
      </footer>
    </div>
  );
}

export default App;
