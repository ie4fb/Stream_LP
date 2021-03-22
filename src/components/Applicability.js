import React from "react";
import icon_1 from "../images/applicability__icons/icon_1.svg";
import icon_2 from "../images/applicability__icons/icon_2.svg";
import icon_3 from "../images/applicability__icons/icon_3.svg";
import icon_4 from "../images/applicability__icons/icon_4.svg";
import icon_5 from "../images/applicability__icons/icon_5.svg";
import icon_6 from "../images/applicability__icons/icon_6.svg";
import icon_7 from "../images/applicability__icons/icon_7.svg";
import icon_8 from "../images/applicability__icons/icon_8.svg";

function Applicability() {
  return (
    <section id="applicability" className="applicability">
      <h2 className="content__heading content__heading_place_advantages">
        Сферы применения
      </h2>
      <div className="applicability__items">
        <div className="applicability__item">
          <img className="applicability__icon" src={icon_1} alt="Иконка" />
          <h3 className="content__subheading content__subheading_place_applicability">
            Социальные сети, сайты знакомств, блоги
          </h3>
        </div>
        <div className="applicability__item">
          <img className="applicability__icon" src={icon_2} alt="Иконка" />
          <h3 className="content__subheading content__subheading_place_applicability">
            Благотворительные организации
          </h3>
        </div>
        <div className="applicability__item">
          <img className="applicability__icon" src={icon_3} alt="Иконка" />
          <h3 className="content__subheading content__subheading_place_applicability">
            Мобильные приложениях для Android, iOS
          </h3>
        </div>
        <div className="applicability__item">
          <img className="applicability__icon" src={icon_4} alt="Иконка" />
          <h3 className="content__subheading content__subheading_place_applicability">
            Gamedev и software дистрибьюция
          </h3>
        </div>
        <div className="applicability__item">
          <img className="applicability__icon" src={icon_5} alt="Иконка" />
          <h3 className="content__subheading content__subheading_place_applicability">
            СМИ и информационные порталы
          </h3>
        </div>
        <div className="applicability__item">
          <img className="applicability__icon" src={icon_6} alt="Иконка" />
          <h3 className="content__subheading content__subheading_place_applicability">
            Онлайн-кинотеатры, стриминговые платформы, видео-сервисы
          </h3>
        </div>
        <div className="applicability__item">
          <img className="applicability__icon" src={icon_7} alt="Иконка" />
          <h3 className="content__subheading content__subheading_place_applicability">
            Музыкальные сервисы
          </h3>
        </div>
        <div className="applicability__item">
          <img className="applicability__icon" src={icon_8} alt="Иконка" />
          <h3 className="content__subheading content__subheading_place_applicability">
            Контент-провайдеры цифровых продуктов и услуг
          </h3>
        </div>
      </div>
    </section>
  );
}
export default Applicability;
