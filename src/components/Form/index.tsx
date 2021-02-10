import React, { useRef } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { getPosts } from '../../store/ducks/posts/actions';

const Form = () => {

  const dispatch = useDispatch();

  let inputImageUrl = useRef<any>(null);
  let inputImageDescription = useRef<any>(null);

  const refreshPosts = () => {
    api.get('/posts')
      .then(response => dispatch(getPosts(response.data)))
  }

  const { username, userPicture } = useSelector((state: any) => state.user);

  const newPost = () => {
    const imageUrl = inputImageUrl.current?.value;
    const imageDescription = inputImageDescription.current?.value;

    api.post('/posts', {
      user: username,
      userPicture: userPicture,
      postPicture: imageUrl,
      description: imageDescription,
      likes: 0
    }).then(response => {
      if (response.status === 201) {
        inputImageUrl.current.value = "";
        inputImageDescription.current.value = "";
        refreshPosts();
      }
    })
  }

  return (
    <div className="form">
      <p>New post</p>
      <input type="text" placeholder="Image URL" ref={inputImageUrl} />
      <input type="text" placeholder="Description" ref={inputImageDescription} />
      <button onClick={newPost}><FiPlusSquare size={24} /></button>
    </div>
  )
}

export default Form;