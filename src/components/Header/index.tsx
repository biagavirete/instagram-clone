import React from 'react';
import { FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Logo from '../../images/logo-instagram.png'

const Header = () => {
  const { name } = useSelector((state: any) => state.user)

  return (
    <div className="header">
      <header>
        <a href="https://www.instagram.com"><img src={Logo} alt="Logo Instagram" /></a>
        <div className="top-info">
          <span>
            <FiUser />
            {name}
          </span>
        </div>
      </header>
    </div>
  )
}

export default Header;