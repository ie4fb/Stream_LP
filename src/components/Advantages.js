import React from "react";
import icon_1 from "../images/advantages_icons/icon_1.svg";
import icon_2 from "../images/advantages_icons/icon_2.svg";
import icon_3 from "../images/advantages_icons/icon_3.svg";
import icon_4 from "../images/advantages_icons/icon_4.svg";
import icon_5 from "../images/advantages_icons/icon_5.svg";
import useWindowSize from "../hooks/useWindowSize";

function Advantages() {
  const window = useWindowSize();
  return (
    <section className="advantages">
      <div className="advantages__content">
        <h2 className="content__heading content__heading_place_advantages">
          Наши преимущества
        </h2>
        <div className="advantages__items">
          <div className="advantages__item advantages__item_offset_left">
            <img className="advantages__icon" src={icon_1} alt="Иконка" />
            <div className="advantages__content-wrapper">
              <span className="advantages__bullet"></span>
              <div className="advantages__text-container">
                <h3 className="content__subheading content__subheading_place_advantages">
                  Лучшие условия
                </h3>
                <p className="content__text content__text_place_advantages">
                  Money.Stream это проект компании Stream – 100% дочерней
                  компании МТС. Наша позиция на рынке позволяет предложить самую
                  высокую конверсию и индивидуальные коммерческие условия
                </p>
              </div>
            </div>
          </div>
          <div className="advantages__item advantages__item_offset_right">
            {window.width <= 768 && <img className="advantages__icon" src={icon_2} alt="Иконка" />}
            <div className="advantages__content-wrapper">
              <span className="advantages__bullet"></span>
              <div className="advantages__text-container">
                <h3 className="content__subheading content__subheading_place_advantages">
                  Индивидуальные решения
                </h3>
                <p className="content__text content__text_place_advantages">
                  Наша миссия – сделать оплату со счета телефона удобной и
                  востребованной. Мы приветствуем и реализуем предложения
                  направленные на достижение общих целей
                </p>
              </div>
            </div>
            {window.width > 768 && <img className="advantages__icon" src={icon_2} alt="Иконка" />}
          </div>
          <div className="advantages__item advantages__item_offset_left">
            <img className="advantages__icon" src={icon_3} alt="Иконка" />
            <div className="advantages__content-wrapper">
              <span className="advantages__bullet"></span>
              <div className="advantages__text-container">
                <h3 className="content__subheading content__subheading_place_advantages">
                  Личный кабинет
                </h3>
                <p className="content__text content__text_place_advantages">
                  Подключайтесь без лишних слов, анализируйте потоки, управляйте
                  транзакциями и выгружайте отчетность в удобном и защищенном
                  интерфейсе
                </p>
              </div>
            </div>
          </div>
          <div className="advantages__item advantages__item_offset_right">
          {window.width <= 768 && <img className="advantages__icon" src={icon_4} alt="Иконка" />}
            <div className="advantages__content-wrapper">
              <span className="advantages__bullet"></span>
              <div className="advantages__text-container">
                <h3 className="content__subheading content__subheading_place_advantages">
                  Круглосуточная поддержка
                </h3>
                <p className="content__text content__text_place_advantages">
                  Личный менеджер и собственный штат инженеров всегда на связи
                </p>
              </div>
            </div>
            {window.width > 768 && <img className="advantages__icon" src={icon_4} alt="Иконка" />}
          </div>
          <div className="advantages__item advantages__item_offset_left">
            <img className="advantages__icon" src={icon_5} alt="Иконка" />
            <div className="advantages__content-wrapper">
              <span className="advantages__bullet"></span>
              <div className="advantages__text-container">
                <h3 className="content__subheading content__subheading_place_advantages">
                  Быстрая интеграция
                </h3>
                <p className="content__text content__text_place_advantages">
                  Один договор и Rest API c тестовым сервером уже в личном
                  кабинете
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
