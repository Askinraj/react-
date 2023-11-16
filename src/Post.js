import React from 'react'
import { useParams } from 'react-router-dom';
const Post = () => {
    const {num} = useParams();
  return (
    <div>Post {num}</div>
  )
}

export default Post