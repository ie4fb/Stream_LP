import React from "react";
import logo from "../images/stream-footer-logo.svg";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

function Footer() {
  const window = useWindowSize();

  return (
    <footer className="footer">
      <img className="footer__logo" alt="Логотип" src={logo}></img>
      <nav className="footer__links">
        <Link className="footer__link" to="/rules">
          Правила использования
        </Link>
        <Link className="footer__link" to="/terms">
          Условия
        </Link>
      </nav>
      <div className="footer__address">
        <p className="footer__address-item footer__address-item_type_bold">
          Москва
        </p>
        <p className="footer__address-item footer__address-item_type_phone">
          8 800 250 7008
        </p>
        <p className="footer__address-item footer__address-item_type_email">
          money@stream.ru
        </p>
        {window.width > 1280 ? (
          <p className="footer__address-item footer__address-item_type_address">{`Проектируемый проезд № 4062, д. 6, стр. 2, 
м. Технопарк`}</p>
        ) : (
          <p className="footer__address-item footer__address-item_type_address">{`Проектируемый проезд
 № 4062, д. 6, стр. 2, 
м. Технопарк`}</p>
        )}
      </div>
    </footer>
  );
}
export default Footer;
