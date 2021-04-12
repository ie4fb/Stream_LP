import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import useWindowSize from "../hooks/useWindowSize";
SwiperCore.use([Pagination]);

function Integration() {
  const window = useWindowSize();
  return (
    <section className="integration">
      <h2 className="content__heading content__heading_place_integration">
        Этапы подключения
      </h2>
      {window.width > 700 && (
        <>
          <div className="integration__strip"></div>
          <div className="integration__stages">
            <div className="integration__stage">
              <div className="integration__icon">1</div>
              <h3 className="content__subheading content__subheading_place_integration">
                Регистрация и описание проекта
              </h3>
              <p className="content__text content__text_place_integration">
                Зарегистрируйтесь в личном кабинете Stream Payments и создайте
                свой первый проект. Наш менеджер уточнит все необходимые детали.
              </p>
            </div>
            <div className="integration__stage">
              <div className="integration__icon">2</div>
              <h3 className="content__subheading content__subheading_place_integration">
                Интеграция по API и проверка документов
              </h3>
              <p className="content__text content__text_place_integration">
                Реализуйте подключение по API при необходимости предоставив
                ограниченный доступ в личный кабинет вашему программисту. Пока
                идёт разработка, загрузите необходимые для проверки документы и
                укажите реквизиты для договора.
              </p>
            </div>
            <div className="integration__stage">
              <div className="integration__icon">3</div>
              <h3 className="content__subheading content__subheading_place_integration">
                Подписание договора и тестирование подключения
              </h3>
              <p className="content__text content__text_place_integration">
                Распечатайте и подпишите договор в 2 экземплярах и направьте нам
                оригиналы. Для испытаний протокола API всегда доступен тестовый
                сервер.
              </p>
            </div>
            <div className="integration__stage">
              <div className="integration__icon">4</div>
              <h3 className="content__subheading content__subheading_place_integration">
                Запуск
              </h3>
              <p className="content__text content__text_place_integration">
                Вы готовы начать прием платежей если договор заключен и тесты
                прошли успешно.
              </p>
            </div>
          </div>
        </>
      )}
      {window.width <= 700 && (
        <Swiper pagination={{ clickable: true }}>
          <SwiperSlide>
            <div className="integration__stage">
              <div className="integration__icon">1</div>
              <h3 className="content__subheading content__subheading_place_integration">
                Регистрация и описание проекта
              </h3>
              <p className="content__text content__text_place_integration">
                Зарегистрируйте в личном кабинете Money.Stream и создайте свой
                первый проект. Наш менеджер уточнит необходимые детали.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="integration__stage">
              <div className="integration__icon">2</div>
              <h3 className="content__subheading content__subheading_place_integration">
                Интеграция по API и проверка документов
              </h3>
              <p className="content__text content__text_place_integration">
                Реализуйте подключение по API при необходимости предоставив
                ограниченный доступ в личный кабинет вашему программисту. Пока
                идёт разработка, загрузите необходимые для проверки документы и
                укажите реквизиты для договора.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="integration__stage">
              <div className="integration__icon">3</div>
              <h3 className="content__subheading content__subheading_place_integration">
                Подписание договора и тестирование подключения
              </h3>
              <p className="content__text content__text_place_integration">
                Распечатайте заполненный договор и направьте нам оригиналы в 2
                экземплярах. Для испытаний протокола API всегда доступен
                тестовый сервер.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="integration__stage">
              <div className="integration__icon">4</div>
              <h3 className="content__subheading content__subheading_place_integration">
                Запуск
              </h3>
              <p className="content__text content__text_place_integration">
                Вы готовы начать прием платежей если договор заключен и тесты
                прошли успешно.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </section>
  );
}

export default Integration;
