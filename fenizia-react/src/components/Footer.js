import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__social-buttons">
        <div className="footer__twitter"></div>
        <div className="footer__facebook"></div>
        <div className="footer__instagram"></div>
      </div>
      <Link className="footer__terms" to="/terminos">Términos y condiciones</Link> 
    </section>
  );
}

export default Footer;
