import React from "react";
import ScrollToTop from "react-scroll-up";

const ToTopButton = () => {
  return (
    <ScrollToTop showUnder={500} duration={1000}>
      <span id="to-top-btn">
        <i className="fas fa-long-arrow-alt-up"></i>
      </span>
    </ScrollToTop>
  );
};

export default ToTopButton;
