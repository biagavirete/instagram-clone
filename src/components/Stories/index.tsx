import React from 'react';

const Stories = () => {
  return (
    <div className="stories">
      <h2>Stories</h2>

      <div className="storie">
        <div className="storie-image">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="user" />
        </div>
        <div className="storie-user">
          <strong>history</strong>
          <span>há 2 horas</span>
        </div>
      </div>
      <div className="storie">
        <div className="storie-image">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="user" />
        </div>
        <div className="storie-user">
          <strong>history</strong>
          <span>há 2 horas</span>
        </div>
      </div>
    </div>
  )
}

export default Stories;