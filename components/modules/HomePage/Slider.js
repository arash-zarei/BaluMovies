import React, { useEffect, useRef, useState } from "react";

// // Icons
import * as Unicons from "@iconscout/react-unicons";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const dotes = useRef(null)
  const images = [
    "/images/banner-1.jpg",
    "/images/banner-2.jpg",
    "/images/banner-3.jpg",
  ];

  const preHandler = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex == 2) {
      setCurrentIndex(0);
    }
  };

  const nextHandler = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex == 0) {
      setCurrentIndex(2);
    }
  };

  useEffect(() => {
    const dot =[...dotes.current.children]
    for (let i = 0; i < dot.length; i++) {
      dot[i].classList.remove("bg-primary")
    }
    dot[currentIndex].classList.add("bg-primary")
  }, [currentIndex])

  return (
    <div className="relative w-full lg:w-[85%] mx-auto mt-6">
      <img src={`${images[currentIndex]}`} alt="image" className="imgSlider" />
      <div className="w-full flex justify-between items-center absolute top-[35%] sm:top-[45%] px-3">
        <span className="sliderBtn" onClick={nextHandler}>
          <Unicons.UilAngleRight />
        </span>
        <span className="sliderBtn" onClick={preHandler}>
          <Unicons.UilAngleLeft />
        </span>
      </div>
      <div className="w-full absolute bottom-7 px-8">
        <button className="w-full py-1 rounded-md text-center bg-primary">
          تماشا
        </button>
      </div>
      <div ref={dotes} className="flex items-center justify-center gap-2">
        <span className="dotesSlider"></span>
        <span className="dotesSlider"></span>
        <span className="dotesSlider"></span>
      </div>
    </div>
  );
};

export default Slider;