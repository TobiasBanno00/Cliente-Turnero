import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { values, size } from "lodash";
import { isEmailValid } from "../../utils/validations";
import { signInApi, setTokenApi } from "../../api/auth"; 
import FormRegister from "../FormRegister";

import "./formLogin.scss";

function FormLogin({closeModal, setContentModal, setRefreshCheckLogin}) {

  const [formData, setFormData] = useState(initialFormValue());
  const [signInLoading, setSignInLoading] = useState(false);

  let openRegister=()=>{
    setContentModal(<FormRegister closeModal={closeModal} />)
  }


  /* --------------------------------------------------------------ONSUBMIT */
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
        setSignInLoading(true);
        signInApi(formData)
          .then(response => {
            if (response.message) {
              toast.warning(response.message);
            } else {
              setTokenApi(response.token);
              toast.success("Inicio de sesion exitosa")
              setRefreshCheckLogin(true);
            }
          })
          .catch(() => {
            toast.error("Error del servidor, inténtelo más tarde");
          })
          .finally(() => {
            setSignInLoading(false);
          });
      }
    } 
  };

  /* --------------------------------------------------------------ONCHAGE */
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-Login">
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group className="form-group">
          <Form.Control
            type="email"
            name="email"
            placeholder="Correo electronico"
            defaultValue={formData.email}
          />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            defaultValue={formData.contraseña}
          />
        </Form.Group>

        <Button  variant="primary" type="submit">
          {!signInLoading ? "Iniciar sesión" : <Spinner animation="border" />}
        </Button>

        <p>¿No estás registrado cómo cliente?</p>
        <Button onClick={openRegister} className="button-registro" variant="primary">
           Registrarse
        </Button>

      </Form>
    </div>
  )

  
}
function initialFormValue() {
  return {
    email: "",
    contraseña: ""
  }
}
export default FormLogin