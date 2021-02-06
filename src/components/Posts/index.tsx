import React, { useEffect } from 'react';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { getPosts } from '../../store/ducks/posts/actions';
import { IPostItem, IPostsState } from '../../store/ducks/posts/types';

export const Posts = () => {

  const dispatch = useDispatch();

  const posts = useSelector((state: IPostsState) => state.posts.postsList)

  useEffect(() => {
    api.get('/posts')
      .then(response => dispatch(getPosts(response.data)))
  }, [])

  console.log(posts)

  return (
    <>
      { posts !== undefined && posts.map((post: IPostItem) => (
        <div className="post">
          <header>
            <img src={post.userPicture} alt="user" />
            <div className="post-user">
              <strong>{post.user}</strong>
              <span>Mars</span>
            </div>
          </header>
          <div className="post-image">
            <img src={post.postPicture} alt="post" />
          </div>
          <div className="post-likes">
            <FiHeart /> {post.likes}
          </div>
          <p>{post.description}</p>
        </div>
      ))}
    </>
  )
}

export default Posts;