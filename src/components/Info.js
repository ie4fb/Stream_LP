import React from "react";
import icon_1 from "../images/info_icons/icon_1.svg";
import icon_2 from "../images/info_icons/icon_2.svg";
import icon_3 from "../images/info_icons/icon_3.svg";
import icon_4 from "../images/info_icons/icon_4.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import useWindowSize from "../hooks/useWindowSize";
SwiperCore.use([Pagination]);

function Info() {
  const window = useWindowSize();
  return (
    <section id="about" className="info">
      <h2 className="info__title">
        Комплекс решений Money.Stream, включает прием платежей по классической
        мобильной коммерции и оплату контентных услуг операторов BIG4
      </h2>
      {window.width > 500 && (
        <div className="info__table">
          <div className="info__item">
            <img className="info__icon" src={icon_1} alt="Иконка" />
            <h3 className="content__subheading content__subheading_place_info">
              Каскад платежей
            </h3>
            <p className="content__text content__text_place_info">
              Комбинируем различные методы оплаты делая оплату удобней для
              клиента и повышая конверсию успешных платежей
            </p>
          </div>
          <div className="info__item">
            <img className="info__icon" src={icon_2} alt="Иконка" />
            <h3 className="content__subheading content__subheading_place_info">
              Рекуррентные платежи
            </h3>
            <p className="content__text content__text_place_info">
              Если ваш сервис продаётся по подписке или требует периодической
              оплаты услуг
            </p>
          </div>
          <div className="info__item">
            <img className="info__icon" src={icon_3} alt="Иконка" />
            <h3 className="content__subheading content__subheading_place_info">
              SMS инициация и информирование
            </h3>
            <p className="content__text content__text_place_info">
              Оплата услуг по SMS на короткий номер, отправка кода для привязки
              телефона или для доступа после покупки. Простое и гибкое решение
            </p>
          </div>
          <div className="info__item">
            <img className="info__icon" src={icon_4} alt="Иконка" />
            <h3 className="content__subheading content__subheading_place_info">
              Безакцептные платежи
            </h3>
            <p className="content__text content__text_place_info">
              Для проверенных партнёров мы рассмотрим возможность проведения
              оплат без подтверждения списания.
            </p>
          </div>
        </div>
      )}
      {window.width <= 500 && (
        <Swiper pagination={{ clickable: true }}>
          <SwiperSlide>
            <div className="info__item">
              <img className="info__icon" src={icon_1} alt="Иконка" />
              <h3 className="content__subheading content__subheading_place_info">
                Каскад платежей
              </h3>
              <p className="content__text content__text_place_info">
                Комбинируем различные методы оплаты делая оплату удобней для
                клиента и повышая конверсию успешных платежей
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info__item">
              <img className="info__icon" src={icon_2} alt="Иконка" />
              <h3 className="content__subheading content__subheading_place_info">
                Рекуррентные платежи
              </h3>
              <p className="content__text content__text_place_info">
                Если ваш сервис продаётся по подписке или требует периодической
                оплаты услуг
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info__item">
              <img className="info__icon" src={icon_3} alt="Иконка" />
              <h3 className="content__subheading content__subheading_place_info">
                SMS инициация и информирование
              </h3>
              <p className="content__text content__text_place_info">
                Оплата услуг по SMS на короткий номер, отправка кода для
                привязки телефона или для доступа после покупки. Простое и
                гибкое решение
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info__item">
              <img className="info__icon" src={icon_4} alt="Иконка" />
              <h3 className="content__subheading content__subheading_place_info">
                Безакцептные платежи
              </h3>
              <p className="content__text content__text_place_info">
                Для проверенных партнёров мы рассмотрим возможность проведения
                оплат без подтверждения списания.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </section>
  );
}
export default Info;
