import React from 'react';
import { Link } from 'react-router-dom';
import "./Authors.css"

const AuthorsBlock = ({author}) => {
  return (
    <Link className='authorblock-link' to={`/writers-inside/${author._id}`}>
      <div className='authors-block'>
      <div className='img-contain-block'>
        <img src={author.thumbnail} alt='author' />
      </div>
      <div className='name-contain-block'>
        <h3 >{author.name}</h3>
      </div>
       
        
    </div>
    </Link>
    
  )
}

export default AuthorsBlock