import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
/* import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import { signInApi, setTokenApi } from "../../api/auth";*/

import "./formLogin.scss";

function FormLogin(props) {
  const [formData, setFormData] = useState(initialFormValue());
  const [signInLoading, setSignInLoading] = useState(false);

  const onSubmit = e => {
    /* e.preventDefault();

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
              console.log(response.token);
              setTokenApi(response.token);
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
    } */
  };

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
            name="password"
            placeholder="Contraseña"
            defaultValue={formData.password}
          />
        </Form.Group>

        <Button  variant="primary" type="submit">
          {!signInLoading ? "Iniciar sesión" : <Spinner animation="border" />}
        </Button>

        <p>¿No estás registrado cómo cliente?</p>
        <Button className="button-registro" variant="primary" type="submit">
          {!signInLoading ? "Registrarse" : <Spinner animation="border" />}
        </Button>

      </Form>
    </div>
  )

  
}
function initialFormValue() {
  return {
    email: "",
    password: ""
  }
}
export default FormLogin