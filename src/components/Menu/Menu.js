import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import BasicModal from "../Modal/BasicModal"
import navaja from "../../assets/png/navaja.png"
import FormLogin from "../FormLogin"
import useAuth from "../../hooks/useAuth";
import { BsFillCaretDownFill } from "react-icons/bs";
import {logoutApi} from "../../api/auth"
import Profile from "../Profile"
import "./menu.scss";

function Menu({setRefreshCheckLogin}) {

  const [showModal, setShowModal] = useState(false)         // cuando esta en true muestra el modal
  const [contentModal, setContentModal] = useState(null)  // almacena formulario que se va a abrir iniciosesion/registro
  const [userOptions, setUserOptions] = useState(false)   // cuando esta en true muestra opciones usuario

  const user = useAuth();

  const openModal = content => {    // abrimos modal que pasamos por parametro
    setShowModal(true);
    setContentModal(content);
  };

  useEffect(() => {             // si user tiene datos cerramos el modal de login
    if(user){
      setShowModal(false);
    }
    setUserOptions(false)
  }, [user])

  let windowOpUser=()=>{            // cerramos o abrimos opciones del usuario
    if(userOptions){
      setUserOptions(false)
    }
    else setUserOptions(true)
  }

  let closeUser=()=>{             // cerramos sesion usuario eliminando token
    logoutApi()
    setRefreshCheckLogin(true)

  }
  

  return (
    <>
      <div className="menu" >
            
                <a className="menu__boton"  href="/#inicio">  Inicio</a>
                <a className="menu__boton" href="#contact">Contacto</a>  
                <img src={navaja} alt="logo" />
                <Link className="menu__boton" to="/turno"  >Turno </Link>
                {user? 
                <>
                  <a className="menu__boton menu__botonUsuario" onClick={()=>windowOpUser()}>{user.sub.nombre} {user.sub.apellido} <BsFillCaretDownFill/></a> 
                  { userOptions? 
                  <nav className='menu__opUsuario'>
                    <a onClick={() =>openModal(<Profile user={user} setRefreshCheckLogin={setRefreshCheckLogin} setShowModal={setShowModal} />)}>Tu perfil</a>
                    <a onClick={()=>closeUser()}>Cerrar sesion</a>   
                  </nav> 
                : <></> }
                </>
                :
                <a className="menu__boton" onClick={() =>openModal(<FormLogin setRefreshCheckLogin={setRefreshCheckLogin} />)} >Iniciar Sesión </a>}
                
      </div>
      <BasicModal show={showModal} setShow={setShowModal}> {contentModal} </BasicModal>
  </>
  )
}

export default Menu