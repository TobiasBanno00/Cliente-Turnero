import React, {useState} from 'react'
import {Row, Col, Form, Button, Spinner} from "react-bootstrap";
import { toast } from "react-toastify";
import { values, size } from "lodash";
import { isEmailValid } from "../../utils/validations";
import {apiRegister} from "../../api/auth"

import "./formRegister.scss"

function FormRegister({closeModal}) {

    const [formData, setFormData] = useState(initialFormValue())
    const [registerLoading, setRegisterLoading] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
         
       let validCount = 0;
       values(formData).some(value => {  //por cada iteracion devuelve el valor de cada item del objt
         value && validCount++;
         return null;
       });
   
       if (size(formData) !== validCount) {
         toast.warning("Completa todo los campos del formulario");
       } 
       else {
            if (!isEmailValid(formData.email)) {
                toast.warning("Email es invalido");
            } 
            else {
                if (formData.contraseña !== formData.repContraseña) {
                    toast.warning("Las contraseñas no coinciden");
                }
                else{
                    if(formData.contraseña.length <= 5){
                        toast.warning("La contraseña debe tener cómo mínimo 6 caracteres");
                    }
                    else{
                            setRegisterLoading(true);
                            apiRegister(formData)
                          .then(response => {
                            if (response.message) {
                              toast.warning(response.message);
                            } else {
                              toast.success("Registro exitoso")
                              closeModal();
                            }
                          })
                          .catch(() => {toast.error("Error del servidor, inténtelo más tarde");})
                          .finally(() => {
                            
                            setRegisterLoading(false);
                        });
                    }
                }
            }
        }
    } 
    
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
  return (
    <Form className='formRegister' onSubmit={onSubmit} onChange={onChange} >
        <h2>NUEVO CLIENTE</h2>
        <Form.Group className='formRegister__group'>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Nombre" name="nombre" defaultValue={formData.nombre}/>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Apellido" name="apellido" defaultValue={formData.apellido}/>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className='formRegister__group'>
          <Form.Control type="email" placeholder="Email" name="email" defaultValue={formData.email}/>
        </Form.Group>

        <Form.Group className='formRegister__group'>
          <Form.Control type="text" placeholder="Celular (caracteristica + celular)" name="celular" defaultValue={formData.celular}/>
        </Form.Group>

        <Form.Group className='formRegister__group'>
          <Form.Control type="text" placeholder="Direccion" name="direccion" defaultValue={formData.direccion}/>
        </Form.Group>

        <Form.Group className='formRegister__group'>
          <Row>
            <Col>
              <Form.Control type="password" placeholder="Contraseña" name="contraseña" defaultValue={formData.contraseña}/>
            </Col>
            <Col>
              <Form.Control type="password" placeholder="Repetir contraseña" name="repContraseña" defaultValue={formData.repContraseña}/>
            </Col>
          </Row>
        </Form.Group>
            <Button variant="primary" type="submit">Registrarse</Button>
    </Form>
  )

  function initialFormValue() {
    return {
      nombre: "",
      apellido: "",
      email: "",
      celular: "",
      direccion: "",
      contraseña: "",
      repContraseña:""
    }
  }
}

export default FormRegister