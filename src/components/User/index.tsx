import React from 'react';

const User = () => {
  return (
    <div className="user-info">
      <img
        alt="Perfil"
        src="https://randomuser.me/api/portraits/women/25.jpg"
      />
      <div className="user-bio">
        <strong>Jeniffer</strong>
        <span>jenicarvalho</span>
      </div>
    </div>
  )
}

export default User;