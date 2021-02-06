import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { getPosts } from '../../store/ducks/posts/actions';

const Form = () => {
  const dispatch = useDispatch();

  let inputImageUrl = useRef<HTMLInputElement>(null);
  let inputImageDescription = useRef<HTMLInputElement>(null);

  const refreshPosts = () => {
    api.get('/posts')
      .then(response => dispatch(getPosts(response.data)))
  }

  const { name, userPicture } = useSelector((state: any) => state.user);

  const newPost = () => {
    const imageUrl = inputImageUrl.current?.value;
    const imageDescription = inputImageDescription.current?.value;

    api.post('/posts', {
      user: name,
      userPicture: userPicture,
      postPicture: imageUrl,
      description: imageDescription,
      likes: 0
    }).then(response => {
      if (response.status === 201) {
        refreshPosts();
      }
    })
  }

  return (
    <div className="form">
      <p>New post</p>
      <input type="text" placeholder="Image URL" ref={inputImageUrl} />
      <input type="text" placeholder="Description" ref={inputImageDescription} />
      <button onClick={newPost}>Post!</button>
    </div>
  )
}

export default Form;