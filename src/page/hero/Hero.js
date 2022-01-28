import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

const dron =
  "https://climacell-microweather-v1.p.rapidapi.com/weather/forecast/hourly?lat=42.8237618&lon=-71.2216286&fields=precipitation";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <>
      <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="hero-info" data-aos="fade-up">
            <h2>DJI MAVIC 3</h2>
            <p>imaging Above Everything</p>

            <button className="btn">Watch Video</button>

            <div className="log-content"></div>
          </article>
        </div>
      </section>

      <div className="hero-three">
        <h3>Explore DJI Products in Different Fields</h3>
        <AiOutlineCheck className="icons" />
        5X increase in reach <AiOutlineCheck className="icons" />
        7x increase in conversation rate
        <AiOutlineCheck className="icons" /> 80% less calls needed for better
        results
      </div>
    </>
  );
};

export default Hero;
