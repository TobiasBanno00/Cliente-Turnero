import React from 'react'
import logo from "../../assets/png/logo2.png"
import "./footer.scss"

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__logo">
                <img src={logo} alt='logo' />
                
        </div>
                
        <p>© 2020-2023 Barber X. Todos los derechos reservados.</p>
                
    </footer>
  )
}

export default Footer