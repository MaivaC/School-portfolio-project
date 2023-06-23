import React,{useEffect,useState} from 'react';
import axios from 'axios';
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

const Testimonials = () => {
 const[data,setData]=useState([]);
  
  useEffect(()=>{
    axios.get("https://concerned-jay-belt.cyclic.app/api/testimonial").then(
      response=>{
        const  formatedData=response.data.data.map(item=>({
 id:item._id,
avatar:item.avatar,
 name:item.name,
 review:item.review,

        })
         
        );
        setData(formatedData)
  }
      
    ).catch(error=>{
      console.log("Error fetching testimonial data:",error);
    })
  },[])
    
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