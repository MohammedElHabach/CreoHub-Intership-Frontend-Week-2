"use client"
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Hobbies from "@/components/Hobbies";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const AboutPage = () => {
    const customClasses = "text-brightRed"

  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="w-1/3 mx-auto"  src="/testi.webp" alt="slide" /></SwiperSlide>
      <SwiperSlide><img className="w-1/3 mx-auto"  src="/testi.png" alt="slide" /></SwiperSlide>
      <SwiperSlide><img className="w-1/3 mx-auto"  src="/about.png" alt="slide" /></SwiperSlide>
    </Swiper>
      <HeroSection
        title={"About Us"}
        subtitle={
          "Embark on a journey with us as we weave stories of passion, purpose, and innovation – a testament to our commitment to shaping a brighter tomorrow. "
        }
        image={"about.png"}
        customClasses={customClasses}
      />
      <Features />
      <Hobbies/>
    </>
  );
};

export default AboutPage;
