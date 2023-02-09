import React from 'react';
import { useState } from 'react';
import { Post } from '../Post/Post';
import { PostForm } from '../PostForm/PostForm';
import { posts as postsData } from './resources/mock-data';

export const Posts = () => {
  const [postsStatus, setPostsStatus] = useState(postsData)

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

  return (
    <div>
      <h1>Posts</h1>
      {!postsStatus || postsStatus.length === 0 ? (
        <p>No posts</p>
      ) : (
        <div>
          {postsStatus.map((post) => (
            <Post key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
          ))}
        </div>
      )}
      <br />
      <PostForm onNewPost={addNewPost} />
    </div>
  )
}

  // const addNewNote = (e, title, content, date, important) => {
  //   e.preventDefault();
  //   const newNote = {
  //     id: notesData.length + 1,
  //     title,
  //     content,
  //     date,
  //     important,
  //   };
  //   notesData.concat(newNote);
  // };

//       return (
//       // <div>
//       {!notes || notes.length === 0 ? (
//         <p>No data</p>
//       ) : (
//         <div>
//           {notes.map((note) => (
//             <Note
//               key={note.id}
//               id={note.id}
//               title={note.title}
//               content={note.content}
//               date={note.date}
//               important={note.important}
//             />
//           ))}
//         </div>
//       )
//   }
//   {/* <NoteForm onNewNote={addNewNote} />
//       </div> */}
//     )
// }

