import React from "react";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Slider() {
  const slider = [
    {
      img: "https://ik.imagekit.io/gku4adhog/mobavenue/clients/myntra.svg",
      title: "myntra",
    },
    {
      img: "https://ik.imagekit.io/gku4adhog/mobavenue/clients/zepto.svg",
      title: "zepto",
    },
    {
      img: "https://ik.imagekit.io/gku4adhog/mobavenue/clients/shopee.svg",
      title: "shopee",
    },
    {
      img: "https://ik.imagekit.io/gku4adhog/mobavenue/clients/nykaa.svg",
      title: "nykaa",
    },
    {
      img: "https://ik.imagekit.io/syin0m2gb/resurgex/Swiggy_Fr2olfH09.svg?updatedAt=1720432958095",
      title: "swiggy",
    },
    {
      img: "https://ik.imagekit.io/gku4adhog/mobavenue/clients/kreditbee.svg",
      title: "kreditbee",
    },
    {
      img: "https://ik.imagekit.io/syin0m2gb/resurgex/shopsy_PcvGURz5Oe.svg?updatedAt=1720432958051",
      title: "shopsy",
    },
    {
      img: "https://ik.imagekit.io/gku4adhog/mobavenue/clients/zivame.svg",
      title: "zivame",
    },
    {
      img: "https://ik.imagekit.io/gku4adhog/mobavenue/clients/dunzo.svg",
      title: "dunzo",
    },
    {
      img: "https://ik.imagekit.io/gku4adhog/mobavenue/clients/my11circle.svg",
      title: "my11circle",
    },
    {
      img: "https://ik.imagekit.io/gku4adhog/mobavenue/clients/rummycircle.svg",
      title: "rummycircle",
    },
    {
      img: "https://ik.imagekit.io/gku4adhog/mobavenue/clients/tata_neu.svg",
      title: "tata_neu",
    },
    {
      img: "https://ik.imagekit.io/gku4adhog/mobavenue/clients/myglamm.svg",
      title: "myglamm",
    },
    {
      img: "https://ik.imagekit.io/syin0m2gb/resurgex/Housing_rC8dvi_5M.svg?updatedAt=1720432958235",
      title: "housing",
    },
  ];

  const sliderTop = slider.slice(0, 7);
  const sliderBottom = slider.slice(7, 14);

  return (
    <>
      <Swiper className="slider1"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={7}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        centeredSlides={true}
        breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 2,
        },
        // when window width is >= 768px
        300: {
          slidesPerView: 3,
        },
        // when window width is >= 1024px
        768: {
          slidesPerView: 5,
        },
        1199: {
          slidesPerView: 7,
        },
        1599: {
          slidesPerView: 8,
        }
      }}
      >
        {sliderTop.concat(sliderTop).map((slides, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={slides.img} alt={slides.title} className="img-fluid" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper className="slider2"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={7}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        centeredSlides={true}
        breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 2,
        },
        // when window width is >= 768px
        300: {
          slidesPerView: 3,
        },
        // when window width is >= 1024px
        768: {
          slidesPerView: 5,
        },
        1199: {
          slidesPerView: 7,
        },
        1599: {
          slidesPerView: 8,
        }
      }}
      >
        {sliderBottom.concat(sliderBottom).map((slides, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={slides.img} alt={slides.title} className="img-fluid" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Slider;
