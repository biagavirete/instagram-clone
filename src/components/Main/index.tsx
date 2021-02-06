import React from 'react';
import Form from '../Form';
import Posts from '../Posts';
import Stories from '../Stories';
import User from '../User';

const Main = () => {
  return (
    <div className="home">
      <div className="post-container">
        <Form />
        <Posts />
      </div>
      <div>
        <User />
        <Stories />
      </div>
    </div>
  )
}

export default Main;