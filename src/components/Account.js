import React, { useEffect } from "react";

function Account({ validation, submitHandler }) {
  const { values, errors, handleChange, isValid, resetForm } = validation;

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmitEvent = (evt) => {
    evt.preventDefault();
    submitHandler(values);
  };

  const handleTelInput = (evt) => {
    console.log(evt.target.value);
    evt.target.value = evt.target.value.replace(/[A-z .,!@#$%&*/]/gim, "");
    handleChange(evt);
  };

  const placeMask = (evt) => {
    if (evt.target.value === "") {
      evt.target.value = "+7(";
    }
  };

  return (
    <section id="account" className="account">
      <h2 className="content__heading content__heading_place_form">
        Создать аккаунт
      </h2>
      <p className="content__subheading content__subheading_place_form">
        Зарегистрируйтесь в личном кабинете и мы свяжемся с вами чтобы
        предложить лучшее решение.
      </p>
      <form onSubmit={handleSubmitEvent} className="account__form form">
        <div className="form__input-container form__input-container_type_telephone">
          <input
            className={`form__input ${
              errors["telephone"] ? "form__input_invalid" : ""
            }`}
            name="telephone"
            value={values["telephone"] || ""}
            onChange={handleTelInput}
            onClick={placeMask}
            type="tel"
            maxLength="16"
            minLength="16"
            placeholder="+7(987)654-32-10"
            required
            pattern="[+][7][(][\d]{3}[)][\d]{3}[-][\d]{2}[-][\d]{2}"
          ></input>
          <span
            className={`form__error ${
              errors["telephone"] ? "form__error_visible" : ""
            }`}
          >
            Введите корректный номер телефона
          </span>
          <label className="form__label">Телефон</label>
        </div>
        <div className="form__input-container form__input-container_type_e-mail">
          <input
            className={`form__input ${
              errors["email"] ? "form__input_invalid" : ""
            }`}
            name="email"
            value={values["email"] || ""}
            onChange={handleChange}
            maxLength="30"
            minLength="2"
            type="email"
            placeholder="email@address.com"
            pattern="^\S+@\S+\.\S+$"
            required
          ></input>
          <label className="form__label">Email</label>
          <span
            className={`form__error ${
              errors["email"] ? "form__error_visible" : ""
            }`}
          >
            Введите корректный адрес
          </span>
        </div>
        <div className="form__input-container form__input-container_type_credentials">
          <input
            className={`form__input ${
              errors["credentials"] ? "form__input_invalid" : " "
            }`}
            name="credentials"
            value={values["credentials"] || ""}
            onChange={handleChange}
            maxLength="100"
            minLength="2"
            placeholder="John Doe"
            required
          ></input>
          <label className="form__label">ФИО</label>

          <span
            className={`form__error ${
              errors["credentials"] ? "form__error_visible" : ""
            }`}
          >
            Заполните это поле
          </span>
        </div>
        <button
          type="submit"
          className="form__button button"
          disabled={!isValid}
          onClick={handleSubmitEvent}
        >
          Зарегистрироваться
        </button>
        <p className="form__offer">
          Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных
          данных
        </p>
      </form>
    </section>
  );
}

export default Account;
