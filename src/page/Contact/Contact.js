import React from 'react'
import { AiFillInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import './contact.scss'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d13618.767851354838!2d-62.07975156931152!3d-31.422612!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI1JzMyLjIiUyA2MsKwMDQnNDYuOCJX!5e0!3m2!1ses-419!2sar!4v1677525523778!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className='contact__info'>
        <h1>CONTACTANOS!</h1>
        <p>Podés hacerlo a través de cualquiera de los medios que están aquí abajo.</p>
        
        <div className='contact__medios'>
          <a target="_blank" href="https://www.instagram.com/x/"><i><AiFillInstagram/></i></a>
          <a target="_blank" href="https://wa.me/543564339059?text=Hola%20barbero."><i><AiOutlineWhatsApp/></i></a>
        </div>

      </div>
        

    </div>
  )
}

export default Contact
