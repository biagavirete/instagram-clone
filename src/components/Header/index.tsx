import React from 'react';
import { FiUser } from 'react-icons/fi';
import Logo from '../../images/logo-instagram.png'

const Header = () => {
  return (
    <div className="header">
      <header>
        <img src={Logo} alt="Logo Instagram" />
        <div className="top-info">
          <span>
            <FiUser />
              Seu nome
            </span>
        </div>
      </header>
    </div>
  )
}

export default Header;