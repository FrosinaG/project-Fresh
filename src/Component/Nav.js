import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="all-nav">
      <div className="logo-box navbar navbar-expand-lg bg-light">
        {" "}
        <h1 className="logo-name">Fresh</h1>
      </div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
          <div className="con-nav">
          
              <a className="navbar-brand" href="/">
                HOME
              </a>
     
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
                <li className="nav-item">
                  
                    <a className="nav-link active" aria-current="page" href="post">
                      SERVICES
                    </a>
                
                </li>
                <li className="nav-item">
                 
                    <a className="nav-link " href="blog">
                   
                      BLOG 
                    </a>
                 
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ABOUT US
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="user">
                       Our team
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="partner">
                       Partners
                      
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="clients">
                        Clients
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="button" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
