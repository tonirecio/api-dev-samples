import React from 'react';
import { useState } from 'react';
import { Post } from '../Post';
import { PostForm } from '../PostForm';
import { create as createPost, getAll as getAllPosts } from '../../services/posts';

// import { posts as postsData } from './resources/mock-data';

export const Posts = () => {
  const [postsStatus, setPostsStatus] = useState([])
  const [componentStatus, setComponentStatus] = useState('loading')

  React.useEffect(() => {
    getAllPosts().then((posts) => {
      setPostsStatus(posts);
      setComponentStatus('success');
    }).catch(() => {
      setComponentStatus('error');
    })
  }, [])

  const addNewPost = (e, userId, title, body) => {
    e.preventDefault();
    const newPost = {
      id: postsStatus.length + 1,
      userId,
      title,
      body,
    };
    createPost(newPost).then((data) => {
      setPostsStatus(postsStatus.concat(newPost));
    }).catch((error) => {
      console.error(error);
    });
  };

  const renderPosts = () => {
    return <div>{!postsStatus || postsStatus.length === 0 ? (
      <p>No posts</p>
    ) : (
      <ol>
        {postsStatus.map((post) => (
          <Post key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
        ))}
      </ol>
    )
    }</div>
  }

  return (
    <div>
      <h1>Posts</h1>
      {componentStatus === 'loading' && <p>Loading...</p>}
      {componentStatus === 'error' && <p>ServerError</p>}
      {componentStatus === 'success' && renderPosts()}
      <br />
      <PostForm onNewPost={addNewPost} />
    </div>
  )
}
