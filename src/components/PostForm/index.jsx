import React from 'react';

export const PostForm = ({ onNewPost }) => {

  const hanleSubmit = (e) => {
    onNewPost(e, e.target.userId.value, e.target.title.value, e.target.body.value);
    e.target.userId.value = '';
    e.target.title.value = '';
    e.target.body.value = '';
  }

  return (
    <div>
      <form onSubmit={hanleSubmit}>
        <h2>New note:</h2>
        <br />
        <label id="userId">User Id</label>
        <input type="text" name="userId" placeholder='userId' />
        <br />
        <label id="title">Title</label>
        <input type="text" name="title" placeholder='title' />
        <br />
        <label id="body">Body</label>
        <input type="text" name="body" placeholder='body' />
        <br />
        <button type="submit">Add</button>
      </form>
      <br />
    </div>
  );
};
