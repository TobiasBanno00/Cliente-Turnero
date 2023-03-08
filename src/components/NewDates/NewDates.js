import React, {useState} from 'react'
import "./newDates.scss"
import {Row, Col, Form, Button, Spinner} from "react-bootstrap";
import { toast } from "react-toastify";
import { values, size } from "lodash";
import { isEmailValid } from "../../utils/validations";
import {updateInfoApi} from "../../api/user"
import {setTokenApi, logoutApi} from "../../api/auth"; 

function NewDates({user, setRefreshCheckLogin}) {

    const [formData, setFormData] = useState(initialFormValue())

    const onSubmit = e => {
        e.preventDefault();
         
       let validCount = 0;
       values(formData).some(value => {  //por cada iteracion devuelve el valor de cada item del objt
         value && validCount++;
         return null;
       });
   
       if (size(formData) !== validCount) {
         toast.warning("Completa todo los campos del formulario");
       } else {
         if (!isEmailValid(formData.email)) {
           toast.warning("Email es invalido");
         } else {
            updateInfoApi(formData)
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
     };
   
     const onChange = e => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

  return (
    <Form className='formNewDates' onSubmit={onSubmit} onChange={onChange}>
        <h2>Editar datos</h2>
        <Form.Group className='formNewDates__group'>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Nombre" name="nombre" defaultValue={user.sub.nombre} />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Apellido" name="apellido" defaultValue={user.sub.apellido}/>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className='formNewDates__group'>
          <Form.Control type="text" placeholder="Celular (caracteristica + celular)" name="celular" defaultValue={user.sub.celular}/>
        </Form.Group>

        <Form.Group className='formNewDates__group'>
          <Form.Control type="text" placeholder="Direccion" name="direccion" defaultValue={user.sub.direccion}/>
        </Form.Group>

            <Button variant="primary" type="submit">Actualizar</Button>
    </Form>
  )

  function initialFormValue() {
    return {
      nombre: user.sub.nombre,
      apellido: user.sub.apellido,
      email: user.sub.email,
      celular: user.sub.celular,
      direccion: user.sub.direccion
    }
  }
}

export default NewDates