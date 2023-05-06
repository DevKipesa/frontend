import React from "react";
import "./Footer.css"
import logo from "../../images/logo-colored.png"


function Footer() {
  return (
    <div className="footerWrapper">
        <footer className="footer">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="social-links">
        <li><a href="#" className="social-link"><i className="fab fa-facebook"></i></a></li>
        <li><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
      </ul>
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default Footer;
