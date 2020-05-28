import React, { useState, useEffect } from "react";

const ToTopButton = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <a href="!#" className="to-top-btn" style={}>
        <i className="fas fa-long-arrow-alt-up"></i>blabla
      </a>
    </>
  );
};

export default ToTopButton;
