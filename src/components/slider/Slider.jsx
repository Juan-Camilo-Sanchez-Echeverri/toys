import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

import { useState } from 'react';
import { sliderItems } from '../../assets/data/sliderItems';
import styled from 'styled-components';
import style from './Slider.module.css';

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className={style.container}>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <div className={style.imgContainer}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={style.infoContainer}>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <AiOutlineArrowRight />
      </Arrow>
    </div>
  );
};

export default Slider;
