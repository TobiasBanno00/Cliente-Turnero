import React, {useState} from 'react'
import {Link} from "react-router-dom";
import BasicModal from "../Modal/BasicModal"
import navaja from "../../assets/png/navaja.png"
import FormLogin from "../FormLogin"
import "./menu.scss";

function Menu() {

  const [showModal, setShowModal] = useState(false)         // cuando esta en true muestra el modal
  //const [contentModal, setContentModal] = useState(null)  // almacena formulario que se va a abrir iniciosesion/registro

  const openModal =() => {
    setShowModal(true);
  };

  return (
    <>
      <div className="menu" >
            
                <a className="menu__boton"  href="/#inicio">  Inicio</a>
                <a className="menu__boton" href="#contact">Contacto</a>  
                <img src={navaja} alt="logo" />
                <Link className="menu__boton" to="/turno"  >Turno </Link>
                <a className="menu__boton menu__inicioSesion" onClick={() =>openModal()} >Iniciar Sesión </a>
      </div>

      <BasicModal show={showModal} setShow={setShowModal}> <FormLogin/> </BasicModal>
  </>
  )
}

export default Menu