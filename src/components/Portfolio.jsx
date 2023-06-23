
import './portfolio.css'
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Portfolio1 from '../assets/book.jpg'
import Portfolio2 from '../assets/yoga.jpg'
import Portfolio3 from '../assets/we.jpg'


const Portfolio = () => {
 const[data,setData]=useState([]);
  
  useEffect(()=>{
    axios.get("https://concerned-jay-belt.cyclic.app/api/testimonial").then(
      response=>{
        const  formatedData=response.data.data.map(item=>({
 id:item._id,
 image:item.image,
 title:item.title,
 github:item.github,
 demo:item.demo
        })
         
        );
        setData(formatedData)
  }
      
    ).catch(error=>{
      console.log("Error fetching portfolio data:",error);
    })
  },[])
  return (

  <section id='portfolio'>
    <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
        {data.map(({id,image,title,github,demo}) => (
         <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio1} alt="Glassmorphic Bank card" />
          </div>
          <h3>T{title}</h3>
          <div className="portfolio__item-cta">
            
           
          <a href={github}className='btn' target='_blank'rel='noopener noreferrer'>Github</a>
          <a href="demo" className='btn btn-primary' target='_blank'rel='noopener noreferrer'>Live Demo</a>
          </div>
         </article>
))}
         

        }    
   </div>
  </section>
)
  
};
export default Portfolio;