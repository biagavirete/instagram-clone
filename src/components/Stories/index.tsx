import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface IStory {
  id: number;
  user: string;
  userPicture: string;
  time: string;
}

const Stories = () => {
  const [stories, setStories] = useState<IStory[]>([]);

  useEffect(() => {
    api.get('/stories')
      .then(response => setStories(response.data))
  }, [])
  return (
    <div className="stories">
      <h2>Stories</h2>
      {stories !== undefined && stories.map((story: IStory) => (
        <>
          <div className="storie" key={story.id}>
            <div className="storie-image">
              <img src={story.userPicture} alt={story.user} />
            </div>
            <div className="storie-user">
              <strong>{story.user}</strong>
              <span>{story.time}</span>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default Stories;