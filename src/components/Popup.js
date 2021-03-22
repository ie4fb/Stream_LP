import React, { useRef, useEffect } from "react";
import successIcon from "../images/success.svg";
import failIcon from "../images/fail.svg";

function Popup({ isPopupOpen, emailStatus, closePopup }) {
  const popupRef = useRef();
  const handleOverlayClick = (evt) => {
    if (evt.target.id === "overlay") {
      closePopup(popupRef);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      popupRef.current.classList.add("popup_visible");
    }, 0);
  }, []);
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closePopup(popupRef);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closePopup]);

  return (
    <div ref={popupRef} className="popup">
      <div
        id="overlay"
        className="popup__overlay"
        onClick={handleOverlayClick}
      ></div>
      <div className="popup__message-container">
        <img
          className="popup__icon"
          src={emailStatus ? successIcon : failIcon}
          alt="Иконка попапа"
        />
        <p className="popup__message">
          {emailStatus
            ? "Ваша заявка принята"
            : "Что-то пошло не так. Попробуйте еще раз."}
        </p>
        <button onClick={() => closePopup(popupRef)} className="popup__button">
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default Popup;
