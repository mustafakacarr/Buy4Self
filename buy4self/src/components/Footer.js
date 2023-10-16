import React from "react";

const Footer = () => {
  return (
    <footer className="mb-0 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top px-3 position-relative bg-primary text-white">
      <p className="col-md-4 mb-0">© 2023 Buy4Self</p>

      <a
        href="/"
        className="col-md-4 d-flex align-items-center justify-content-center link-light text-decoration-none fs-4"
      >
        Buy4Self
      </a>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-white">
            Home
          </a>
        </li>
        
        <li className="nav-item">
          <a href="/offers" className="nav-link px-2 text-white">
            Offers
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
