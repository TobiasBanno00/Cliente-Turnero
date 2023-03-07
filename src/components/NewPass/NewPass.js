import React, {useState} from 'react'
import {Form, Button} from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import {updateInfoApi} from "../../api/user"
import {setTokenApi, logoutApi} from "../../api/auth"; 

import "./newPass.scss"

function NewPass({setRefreshCheckLogin}) {

    const [authNewPass, setAuthNewPass] = useState(null)

    const onSubmit = e => {
        e.preventDefault();
       let validCount = 0;
       values(authNewPass).some(value => {  //por cada iteracion devuelve el valor de cada item del objt
         value && validCount++;
         return null;
       });
   
       if (size(authNewPass) !== validCount) {
         toast.warning("Completa todo los campos");
       } else {
         if (authNewPass.newPass1 !== authNewPass.newPass2) {
           toast.warning("Las contraseñas no coinciden");
         } else {
            if(authNewPass.newPass1.length <= 5){
                toast.warning("La contraseña debe tener cómo mínimo 6 caracteres");
            }
            else{
            
                updateInfoApi({contraseña: authNewPass.newPass1})
                .then(response => {
                  if (response.message) {
                    toast.warning(response.message);
                  } else {
                    logoutApi();
                    setTokenApi(response.token);
                    setRefreshCheckLogin(true);
                    toast.success("Actualización exitosa")
                }
                })
                .catch(() => {
                    toast.error("Error del servidor, inténtelo más tarde");
                })
                .finally(() => {
               
                });
            }
            
         }
       } 
     };

    const onChange = e => {
        setAuthNewPass({ ...authNewPass, [e.target.name]: e.target.value });
      };

  return (
    <Form className='formNewPass' onSubmit={onSubmit} onChange={onChange}>
   
        <Form.Group className='formNewPass__group'>
            <h3>Nueva contraseña</h3>
            <Form.Control type="password" name="newPass1"/>
        </Form.Group>

        <Form.Group className='formNewPass__group'>
            <h3>Repetir nueva contraseña</h3>
            <Form.Control type="password" name="newPass2"/>
        </Form.Group>

            <Button variant="primary" type="submit">Actualizar</Button>
    </Form>
  )

}

export default NewPass