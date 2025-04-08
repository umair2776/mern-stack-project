import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  const slides = [
    {
      img: "https://stylo.pk/cdn/shop/files/2880X1620_2_d4a37bcc-4835-4d31-a9fe-4054bb58df7d.jpg?v=1742061685&width=2400",
    },
    {
      img: "https://stylo.pk/cdn/shop/files/2880-1620-_1.jpg?v=1742453118&width=2400",
    },
    {
      img: "https://stylo.pk/cdn/shop/files/2880x1620_5c0294d0-8b30-4ad5-87d1-0fd50b470eeb.jpg?v=1741019139&width=2400",
    },
    {
      img: "https://stylo.pk/cdn/shop/files/2880X1620_S.jpg?v=1739971097&width=2400",
    },
  ];

  return (
    <div className="mt-3">
    <div className="" style={{ width: "100%", maxWidth: "1600px", margin: "0 auto" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "450px", // Thodi aur kam kar di height
                objectFit: "cover", // Image crop hogi but stretch nahi hogi
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Carousel;
