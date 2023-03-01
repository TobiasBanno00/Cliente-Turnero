import React from 'react'
import { Modal } from "react-bootstrap";
import Logo from "../../../assets/png/logo2.png";
import "./basicModal.scss";

function BasicModal(props) {

    const { show, setShow, children } = props;
  
    return (
      <Modal
        className="basic-modal"
        show={show}                     // True abierto, false cerrado
        onHide={() => setShow(false)}   // cuando se presiona el fondo se cierra el modal
        centered                        //centrado
      >
        <Modal.Header>
          <Modal.Title>
            <img src={Logo} alt="Twittor" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    );
  }

export default BasicModal