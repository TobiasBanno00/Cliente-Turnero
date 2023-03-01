import React from 'react'
import "./signIn.scss"
import {Container, Row, Col, Button} from "react-bootstrap"
import logo from "../../assets/png/logo.png"

function SignIn() {
  return (
    <Container className='signIn' fluid>
        <Row>
            <CenterComponent/>
        </Row>
    </Container>
  )
}

function CenterComponent() {
    return(
        <div className="signIn__center" >

        <img src={logo} alt="logo" />
        </div>
    )
}



export default SignIn