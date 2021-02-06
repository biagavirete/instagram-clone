import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { getUser } from '../../store/ducks/user/actions';

const User = () => {

  const dispatch = useDispatch();

  const { name, username, userPicture } = useSelector((state: any) => state.user)

  useEffect(() => {
    api.get('/user')
      .then(response => dispatch(getUser(response.data)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="user-info">
      <img
        alt="Perfil"
        src={userPicture}
      />
      <div className="user-bio">
        <strong>{name}</strong>
        <span>{username}</span>
      </div>
    </div>
  )
}

export default User;