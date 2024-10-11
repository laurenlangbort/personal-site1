import React, { useState } from "react";
import "./images-about.css";
import pic1 from "../assets/picsForSite/pic1.JPG";
import pic2 from "../assets/picsForSite/pic2.png";
import pic3 from "../assets/picsForSite/pic3.JPG"; 
import butterfly from "../assets/butterfly.png";

type Slide = {
  image: string;
};

export const SliderData: Slide[] = [
  {
    image: pic1,
  },
  {
    image: pic2,
  },
  {
    image: pic3,
  },
];

type ImageSliderProps = {
  slides: Slide[];
};

export const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <span className="arrow-left">
        <i className="bi bi-arrow-left" onClick={prevSlide}></i>
      </span>
      <span className="arrow-right">
        <i className="bi bi-arrow-right ps-5" onClick={nextSlide}></i>
      </span> 
      <img src={butterfly} alt="" className="butterfly" />
      {slides.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="image"
            />
          )}
        </div>
      ))}
    </section>
  );
};
