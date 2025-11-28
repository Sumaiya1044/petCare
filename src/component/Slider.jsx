import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';
import i3 from '../assets/i3.jpg';

const Slider = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-4 rounded-lg overflow-hidden shadow-lg">

      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="h-[420px]"   
      >
        {[i1, i2, i3].map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[420px] object-cover"  
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Slider;
