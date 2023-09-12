import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const TextSlider = ({ texts, duration, delay }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const sliderWidth = slider.offsetWidth;
    const textElements = slider.getElementsByClassName('slider-text');

    gsap.set(textElements, { x: sliderWidth });

    let currentTextIndex = 0;
    let nextTextIndex = 1;
    let tl;

    const animateSlider = () => {
      tl = gsap.timeline({ repeat: -1, defaults: { duration, delay } });
      tl.to(textElements[currentTextIndex], { x: -sliderWidth })
        .to(textElements[nextTextIndex], { x: 0 })
        .to(textElements[currentTextIndex], { x: sliderWidth });

      currentTextIndex = (currentTextIndex + 1) % texts.length;
      nextTextIndex = (nextTextIndex + 1) % texts.length;
    };

    animateSlider();

    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, [texts, duration, delay]);

  return (
    <div className="slider" ref={sliderRef}>
      {texts.map((text, index) => (
        <div key={index} className="slider-text">
          {text}
        </div>
      ))}
    </div>
  );
};

export default TextSlider;
