import styles from "./carousel.module.css";
import React from "react";
import classNames from "classnames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foodImagesCarousel from "../../../images/carousel-images/images";

export const CarouselUI = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <section className={styles.body}>
        <div className={styles.content}>
          {/* <h1 className={styles.header}>Afro Styles Fashion Store</h1> */}
          <div className={styles.container}>
            <Slider {...settings}>
              {foodImagesCarousel.map((item) => (
                <div key={item.id}>
                  <div className={classNames(styles.imgBody, styles.img)}>
                    <img src={item.src} alt={item.alt} />
                  </div>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.calories}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
