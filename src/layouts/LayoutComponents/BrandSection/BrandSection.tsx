import React, {useState} from 'react'
import { Navigation, FreeMode, Thumbs, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay'
import './BrandSection.scss'

const BrandSection = () => {
     const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='mt-[80px] bg-[#fff] flex justify-center '>
       <div className='w-[1000px]'>
        <div className='mb-[30px] font-semibold'>
          <h2>Trusted by over 150+ major companies</h2>
        </div>
          <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={0}
          slidesPerView={6}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs,Autoplay]}
          className="mySwiper"
        >
            <SwiperSlide>
              <img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-4.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-5.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-6.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-7.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-8.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='' className='slide-img w-[110px] h-[55px]' src="https://themesflat.co/html/dreamhomehtml/assets/images/img-box/brand-9.png" />
            </SwiperSlide>
  
        </Swiper>
       </div>
    </div>
  )
}

export default BrandSection