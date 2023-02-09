import React from 'react';
import { useState } from 'react';
import { Post } from '../Post/Post';
import { PostForm } from '../PostForm/PostForm';
import { getPosts } from '../../services/posts';
// import { posts as postsData } from './resources/mock-data';

export const Posts = () => {
  const [postsStatus, setPostsStatus] = useState([])
  const [componentStatus, setComponentStatus] = useState('loading')

  React.useEffect(() => {
    getPosts().then((posts) => {
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
    setPostsStatus(postsStatus.concat(newPost));
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
