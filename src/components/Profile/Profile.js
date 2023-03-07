import React, {useState} from 'react'
import NewDates from '../NewDates/NewDates'
import NewPass from '../NewPass/NewPass'
import { AiFillHome, AiFillPhone, AiOutlineMail} from "react-icons/ai";

import "./profile.scss"

function Profile({user, setRefreshCheckLogin, setShowModal}) {

    const [newDat, setNewDat] = useState(false)        // cuando está en true podemos modificar datos
    const [newPass, setNewPass] = useState(false)      // cuando está en true podemos modificar contraseña

  return (

    <>
    { newDat?
      <NewDates user={user} setRefreshCheckLogin={setRefreshCheckLogin} />
    :
    newPass?
      <NewPass setRefreshCheckLogin={setRefreshCheckLogin} />
    :
    <div className='infoUser'>
        <h3> {user.sub.nombre} {user.sub.apellido}</h3>
        <h4> <i><AiFillPhone/> Celular:</i> {user.sub.celular}</h4>
        <h4> <i><AiFillHome/> Dirección:</i>  {user.sub.direccion}</h4>
        <h4> <i><AiOutlineMail/> Email:</i>  {user.sub.email} </h4>

        <div className='buttonConfig'>
          <a onClick={()=>setNewDat(true)}>Editar datos</a>
          <a onClick={()=>setNewPass(true)}>Nueva contraseña</a>
        </div>
    </div>

    }

    
  </>
  )

  
}

export default Profile