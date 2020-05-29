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
    window.scrollY > 4900 ? placeBtn("200px") : placeBtn("30px");
  };

  return (
    <a href="!#" id="to-top-btn" className={style}>
      <i className="fas fa-long-arrow-alt-up"></i>
    </a>
  );
};

export default ToTopButton;
