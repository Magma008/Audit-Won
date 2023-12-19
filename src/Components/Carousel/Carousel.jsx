import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card from './Card';

import img1 from "../Images/card_1.jpg"
import img2 from "../Images/card_2.jpg"
import img3 from "../Images/card_3.jpg"
import img4 from "../Images/card_4.jpg"
import img5 from "../Images/card_5.jpg"
import img6 from "../Images/card_6.jpg"
import img7 from "../Images/card_7.jpg"
import img8 from "../Images/card_8.jpg"

const Carousel = () => {
    return (
        <div id='swiper' className='p-4 py-14 items-center'>
            <h1 className="text-[50px] font-bold text-center">Услуги</h1>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}           
                breakpoints={{
                    440: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Card image={img1} text1="Подготовка организаций к" text2="Аудиторской проверке по" text3="Международным" text4="стандартам аудита (MCA) и" text5="Национальным стандартам" text6="аудита (НCA)" /></SwiperSlide>

                <SwiperSlide><Card image={img2} text1="Ведение бухгалтерского" text2="учета 1C (OUTSOURCING)" /></SwiperSlide>

                <SwiperSlide><Card image={img3} text1="Помощь в сдаче налоговых," text2="стат. отчётов и в сдаче" text3="отчётов местным" text4="организациям" /></SwiperSlide>

                <SwiperSlide><Card image={img4} text1="Консалтинговые услуги в" text2="сфере оформления" text3="экспортно-импортных" text4="контрактов и таможенных" text5="документов" /></SwiperSlide>

                <SwiperSlide><Card image={img5} text1="Ежеквартальные," text2="ежемесячные и другие" text3="консалтинговые услуги" /></SwiperSlide>

                <SwiperSlide><Card image={img6} text1="Трансформация" text2="бухгалтерской отчётности" text3="согласно МСФО" /></SwiperSlide>

                <SwiperSlide><Card image={img7} text1="Восстановление" text2="бухгалтерского учёта" text3="малых и крупных" text4="предприятий" /></SwiperSlide>

                <SwiperSlide><Card image={img8} text1="Составление финансового" text2="ковенанта и учётной политики " text3="организаций."/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel