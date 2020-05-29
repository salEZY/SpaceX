import React, { useState } from "react";
import { css } from "emotion";

const ToTopButton = () => {
  const [bottom, setBottom] = useState("30px");
  const [show, setShow] = useState("none");

  const style = css`
    display: ${show};
    bottom: ${bottom};
  `;

  const placeBtn = (bottom) => {
    setBottom(bottom);
  };

  const showBtn = (display) => {
    setShow(display);
  };

  window.onscroll = () => {
    window.scrollY > 500 ? showBtn("block") : showBtn("none");
    window.scrollY > document.body.scrollHeight - 1100
      ? placeBtn("200px")
      : placeBtn("30px");
  };

  return (
    <span
      id="to-top-btn"
      className={style}
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <i className="fas fa-long-arrow-alt-up"></i>
    </span>
  );
};

export default ToTopButton;
