import React from 'react';
import image1 from '../../assets/Slider2/IMAGE.png';
import image2 from '../../assets/Slider2/IMAGE2.png';
import image3 from '../../assets/Slider2/IMAGE3.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './styles.module.css';
import { PrevArrow, NextArrow } from './ArrowsSlider/Arrows.tsx';

interface CarouselSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  prevArrow: JSX.Element;
  nextArrow: JSX.Element;
}

const settings: CarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

export const SimpleCarousel: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.SliderTitle}>@THEMAGICSLAB</h2>
      <p className={styles.SliderSubtitle}>Put the magic in your feed and follow us on Instagram for updates into <br/> our creamy world!</p>
      <Slider {...settings} className={styles.slider}>
        <div className={styles.image}>
          <img src={image1} alt='slide-1' />
        </div>
        <div className={styles.image}>
          <img src={image2} alt='slide-2' />
        </div>
        <div className={styles.image}>
          <img src={image3} alt='slide-3' />
        </div>
        <div className={styles.image}>
          <img src={image2} alt='slide-4' />
        </div>
        <div className={styles.image}>
          <img src={image3} alt='slide-5' />
        </div>
        <div className={styles.image}>
          <img src={image1} alt='slide-6' />
        </div>
      </Slider>
    </div>
  );
};
