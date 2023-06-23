
import './portfolio.css'
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Portfolio1 from '../assets/book.jpg'
import Portfolio2 from '../assets/yoga.jpg'
import Portfolio3 from '../assets/we.jpg'


const Portfolio = () => {
 const[data,setData]=useState([]);
  
  useEffect(()=>{
    axios.get("https://app.netlify.com/sites/stirring-marigold-75a400/overview").then(
      response=>{
        const  formatedData=response.data.data.map(item=>({
 id:item._id,
 image:item.image,
 title:item.github,
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
         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio1} alt="Glassmorphic Bank card" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://githup.com/MaivaC/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio2} alt="Glassmorphic Bank card" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://githup.com/MaivaC/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio3} alt="Clothing Website" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://githup.com/MaivaC/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

      
         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio2} alt="Shopping Website" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://githup.com/NyandoOnongwene/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>
        
      </div>

       
    </section>
  
  )
}
export default Portfolio;