import React, { useState } from "react";
import { SliderData } from "./sliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./about.sass";

export default function About({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <div className="about">
        <div className="about_text">
          <h1 className="about_title">About BrightWater</h1>
          <p>
            The naming of the product is inspired by the clarity and purity
            water brings when drinking, seeking a contrast between the apperance
            of the bottle, elegand and refined, and the name, ironic and
            particular, in order to characterize the product by defining its own
            identity
          </p>
          <br></br>
          <p>
            The product consists in a ceramic bottle with a diameter of 75mm and
            e height of 207mm with a capacity of 0.5L.
          </p>
          <p>
            BrightWater has a rubber coating in the lower part and a woden
            finish on the cap, two elements that allow to characterize the
            product and improve percived quality.
          </p>
        </div>
        <img
          className="bottle_schematic"
          src="./BW_schematic.svg"
          alt="BrightWater bottle shematic"
        ></img>
      </div>
      <div className="slider_wrapper">
        <section className="slider">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt="bottles" className="image" />
                )}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
