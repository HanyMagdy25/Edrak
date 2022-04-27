import React from 'react';
import { Link } from 'react-router-dom';
import "./Authors.css"

const Authors = ({author}) => {
  return (
    <Link className='author-link' to={`/writers-inside/${author._id}`}>
    <div className='authors'>
        <div className='img-contain'>
          <img src={author.thumbnail} alt='author' />
        </div>
        <div className='name-contain'>
          <h4 >{author.name}</h4>
        </div>
    </div>
    </Link>
    
  )
}

export default Authors