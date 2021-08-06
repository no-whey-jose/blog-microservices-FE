import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';

export default () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async() => {
    const response = await axios.get('http://localhost:4000/posts');
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  },[]);

  const renderPosts = Object.values(posts).map((post, index) => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px'}}
        key={index}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
        </div>
      </div>
    )
  })
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderPosts}
    </div>
  )
}