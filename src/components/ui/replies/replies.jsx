import styles from "./replies.module.css";
import repliesText from "./replies-text";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const RepliesUI = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10,
  };
  return (
    <>
      <div className={styles.container}>
        <Slider {...settings}>
          {repliesText.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
