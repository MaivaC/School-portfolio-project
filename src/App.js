import './App.css';


import Navbar from './components/Navbar'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import Footer from './components/Footer'



function App() {
 
    
  return (
    <div >
      <Navbar/>
      <Header/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
