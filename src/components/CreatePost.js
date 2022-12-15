import React,{useState,useEffect} from 'react';

function CreatePost({user,setPosts,posts}) {
  const [content,setContent] = useState('');
  const [image,setImage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const post = {content,image,user};
    const newPosts = [post, ...posts];
    setPosts(newPosts);
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
        type = 'text'
        placeholder = 'Add Post Content'
        onChange={event => setContent(event.target.value)}
        />
        <input 
        type= 'file'
        onChange={event =>setImage(event.target.files[0])}
        />
        <button type = 'submit'>Submit Post</button>
      </form>

    
      </div>
  )
}

export default CreatePost