import React, { useState, useEffect } from "react";
import logo from "../images/stream-header-logo.svg";
import { Link } from "react-scroll";
import useWindowSize from "../hooks/useWindowSize";

function Header({ isExtended }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const window = useWindowSize();

  const handleMenuButtonClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isMenuOpen]);
  useEffect(() => {
    if (window.width > 768 && isMenuOpen === true) {
      setMenuOpen(false);
    }
  }, [window.width, isMenuOpen]);

  return (
    <header className={`header ${isMenuOpen ? "open" : ""}`}>
      <img className="header__logo" src={logo} alt="Логотип" />
      {window.width > 768 && (
        <div className="header__menu">
          {isExtended ? (
            <>
              <Link
                className="header__link"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                О сервисе
              </Link>
              <Link
                className="header__link"
                to="applicability"
                spy={true}
                smooth={true}
                duration={500}
              >
                Направления
              </Link>
              <Link
                className="header__link"
                to="account"
                spy={true}
                smooth={true}
                duration={500}
              >
                Регистрация
              </Link>
            </>
          ) : (
            <a className="header__link header_link_type_main" href="/stream_lp">
              На главную
            </a>
          )}
        </div>
      )}
      {window.width <= 768 && (
        <>
          <button
            className="header__button"
            onClick={handleMenuButtonClick}
          ></button>
          <div className="header__burger-menu">
            {isExtended ? (
              <>
                <Link
                  className="header__link"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleMenuButtonClick}
                >
                  О сервисе
                </Link>
                <Link
                  className="header__link"
                  to="applicability"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleMenuButtonClick}
                >
                  Направления
                </Link>
                <Link
                  className="header__link"
                  to="account"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleMenuButtonClick}
                >
                  Регистрация
                </Link>
              </>
            ) : (
              <a className="header__link" href="/stream_lp">На главную</a>
            )}
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
