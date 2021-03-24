import React, { useEffect } from "react";

function ApiLinks() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className="api-links">
      <h2 className="content__heading content__heading_place_api-links">
        Техническая документация
      </h2>
      <ul className="api-links__list">
        <li className="api-links__item">
          <a
            className="api-links__link"
            rel="noreferrer"
            href="https://stream.ru/static/docs/api_stream_payments_v2-2_ru.pdf"
            target="_blank"
          >
            Русская версия
          </a>
        </li>
        <li className="api-links__item">
          <a
            className="api-links__link"
            rel="noreferrer"
            href="https://stream.ru/static/docs/api_stream_payments_v2-2_en.pdf"
            target="_blank"
          >
            English version
          </a>
        </li>
      </ul>
    </section>
  );
}

export default ApiLinks;
