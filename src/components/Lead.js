import React from "react";
import { Link } from "react-scroll";
import logo from "../images/lead-logo.svg";
import bg_logo from "../images/lead-bg.svg";
import useWindowSize from "../hooks/useWindowSize";

function Lead() {
  const window = useWindowSize();
  return (
    <section className="lead">
      <div className="lead__content-wrapper">
        <h1 className="lead__heading">
          Принимаем платежи по Мобильной коммерции
        </h1>
        <ul className="lead__list">
          <li className="lead__list-item">
            <span className="lead__accent">Удобный и безопасный платеж</span>
          </li>
          <li className="lead__list-item">
            <span className="lead__accent">Увеличение конверсии оплаты</span>
          </li>

          <li className="lead__list-item">
            <span className="lead__accent">Простая интеграция по API</span>
          </li>
          <li className="lead__list-item">
            <span className="lead__accent">Тарифы от 2%</span>
          </li>
        </ul>
        <Link
          className="lead__link"
          to="form"
          spy={false}
          smooth={true}
          duration={500}
          offset={-190}
        >
          Подключиться
        </Link>
        <img className="lead__logo" src={logo} alt="Логотип" />
        <img className="lead__logo-minor" src={bg_logo} alt="Фон" />
      </div>
    </section>
  );
}

export default Lead;
