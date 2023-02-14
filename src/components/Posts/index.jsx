import React from 'react';
import { Post } from '../Post';
import { PostForm } from '../PostForm';
import { create as createPost, getAll as getAllPosts } from '../../services/posts';
import { useFetchData } from '../../hooks/useFetchData';
import { Error } from '../Error';
import { Loader } from '../Loader';

// import { posts as postsData } from './resources/mock-data';

export const Posts = () => {

  const [data, setData, isLoaded, isError] = useFetchData({
    key: -1,
    action: getAllPosts(),
  });

  const addNewPost = (e, userId, title, body) => {
    e.preventDefault();
    const newPost = {
      id: data.length + 1,
      userId,
      title,
      body,
    };
    createPost(newPost).then((data) => {
      setData(data.concat(newPost));
    }).catch((error) => {
      console.error(error);
    });
  };

  const renderPosts = () => {
    return <div>{!data || data.length === 0 ? (
      <p>No posts</p>
    ) : (
      <ol>
        {data.map((post) => (
          <Post key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
        ))}
      </ol>
    )
    }</div>
  }


  if (!isLoaded) {
    return <Loader />
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div>
      <h1>Posts</h1>
      {renderPosts()}
      <br />
      <PostForm onNewPost={addNewPost} />
    </div>
  )
}
