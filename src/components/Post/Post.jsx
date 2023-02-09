import React from 'react';

export const Post = ({ userId, id, title, body }) => {
  return (
    <div>
      <h3>IserId: {userId} - Id: {id} - {title}</h3>
      <p>{body}</p>
    </div>
  );
};
