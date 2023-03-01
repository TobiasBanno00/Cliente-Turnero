import React from 'react'
import BasicLayout from '../../layout/BasicLayout'
import {Link} from "react-router-dom";
import logo from "../../assets/png/logo2.png"
import Contact from "../Contact"

import "./start.scss"

function Start() {
  return (
    <BasicLayout>
        <div className='start' id='inicio'>
            <img src={logo} alt="logo" />
            <div className='start__info'>
                <h1>- PELUQUERÍA Y BARBERÍA -</h1>
            </div>
        </div>  

        <div className='turno'>
          <div className='turno__info'>
            <h1>RESERVÁ TU TURNO ONLINE</h1>
            <p>En x Barber Shop queremos simplificarte el trabajo. Reservar tu cita es muy fácil, rápido y cómodo.</p>
          </div>
          <Link className="turno__boton" to="/turno">RESERVAR TURNO</Link> 
        </div>

        <Contact/>
    </BasicLayout>
  )
}

export default Start