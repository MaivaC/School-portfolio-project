import React from 'react'
import './testimonial.css'
import T1 from '../assets/book.jpg'
import T2 from '../assets/book.jpg'
import T3 from '../assets/book.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
      id: 1,
      review:
        "Working with Metagne has been such an amazing journey. He is commited to the work and always deliver in time",
      avatar: T1,
      name: "Mbo Valentine",
    },
    {
      id: 2,
      review:
        "Metagne is the best frontend developer I have ever worked with",
      avatar: T2,
      name: "Mbah Elsie",
    },
    {
      id: 3,
      review:
        "Working with Metagne has been really awesome. He is always prompt deliver high quality services and he always deliver",
      avatar: T3,
      name: "Arrah Mbone",
    },
    {
      id: 4,
      review:
        "Working with Metagne as my assistant Junior Frontend Development has really doubed my productivity",
      avatar: T2,
      name: "Njang Elsie",

    },
  ];

export const Testimonial = () => {
  return (
     <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
          return(
         
        <SwiperSlide  key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
         </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
            {review}
            </small>
          
        </SwiperSlide>
          )
           })
         
         }
        
      </Swiper>
    </section>
  )
}
export default Testimonial;