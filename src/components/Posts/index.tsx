import React, { useEffect } from 'react';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { getPosts } from '../../store/ducks/posts/actions';
import { IPostItem, IPostsState } from '../../store/ducks/posts/types';

export const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state: IPostsState) => state.posts.postsList)

  const showPosts = () => {
    api.get('/posts')
      .then(response => dispatch(getPosts(response.data)))
  }

  const handleLike = (post: IPostItem) => {
    api.patch(`/posts/${post.id}`, {
      likes: post.likes + 1
    }).then(response => {
      if (response.status === 200) {
        showPosts();
      }
    })
  }

  useEffect(() => {
    showPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      { posts !== undefined && posts.map((post: IPostItem) => (
        <div className="post" key={post.id}>
          <header>
            <img src={post.userPicture} alt="user" />
            <div className="post-user">
              <strong>{post.user}</strong>
              <span>{post.location}</span>
            </div>
          </header>
          <div className="post-image">
            <img src={post.postPicture} alt="post" />
          </div>
          <div className="post-likes">
            <FiHeart onClick={() => handleLike({ ...post })} /> {post.likes}
          </div>
          <p>{post.description}</p>
        </div>
      ))}
    </>
  )
}

export default Posts;