import {React, useState} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import axios from "axios"

 const Contact = () => {

  const [openModal, setOpenModal] = useState(false)



const [msg, setMsg] = useState('')
const [name, setName] = useState('')
const [email, setEmail] = useState('')

 const submit= async(e)=>{
  e.preventDefault()
  setMsg('');
  setName('');
  setEmail('');

  try {

      await axios.post("http://localhost:4000/", {
        name,
        email,
        msg
      })

  }
  catch(e) {
    console.log(e)
  }

}

 const form = useRef();
  
 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mnlumf2', 'template_rw00c9p', form.current, 'FYkKCQv3_vgzQlCGKT')
    
    e.target.reset()
  };


  return (
    <section id="contact">
<h5>Get in touch</h5>
<h2>Contact me</h2>
<div className="container contact__container">
<div className="contact__options">
<article className='contact__option'>
<MdOutlineEmail className='contact__option__icon'/>

<h4>Email</h4>
<h5>kamgamaiva@gmail.com</h5>
<a href='mailto:kamgamaiva@gmail.com' target='_blank' rel='' >send a message</a>
</article>
<article className='contact__option'>
<AiOutlineLinkedin className='contact__option__icon'/>

<h4>LinkedIn</h4>
<h5>Profile</h5>

</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option__icon'/>

<h4>Whatsapp</h4>
<h5>Direct message</h5>
<a href='https://web.whatsapp.com/send?phone=+237654151895' rel=''
target='_blank'>Whatsapp me</a>
</article>
</div>

<form ref={form} onSubmit={sendEmail}>
 <div>  
<input type="text" name='name' placeholder='full name' required="required" value={name} onChange={(e)=>{setName(e.target.value)}}/>
</div>
<div>
<input type="email" name='email' placeholder='your email' required="required" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
</div>
<div>
<textarea name="message" id="message" cols="30" rows="10"
placeholder='your message' required="required" value={msg} onChange={(e)=>{setMsg(e.target.value)}} ></textarea>
</div>
<div>
<button type="submit" className='btn btn-primary' onClick={submit} value="Send">send message</button>
</div>
</form>
</div>
</section>
  )
}
export default Contact;