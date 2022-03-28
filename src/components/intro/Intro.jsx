import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Machine Learning Researcher", "Developer", "Computer Science Student"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="center">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1> Rodrigo de Carvalho,  </h1>
          <h3>
          a <span ref={textRef}></span>
          </h3>
        </div>
      </div>
      <div className="arrow">
        <a href="#aboutme">
          <img src="assets/downWhite.png" alt="" />
        </a>
      </div>
    </div>
  );
}
