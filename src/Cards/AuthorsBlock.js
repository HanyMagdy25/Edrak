import React from 'react';
import "./Authors.css"

const AuthorsBlock = ({author}) => {
  return (
    <div className='authors-block'>
      <div className='img-contain-block'>
        <img src={author.thumbnail} alt='author' />
      </div>
      <div className='name-contain-block'>
        <h3 >{author.name}</h3>
      </div>
       
        
    </div>
  )
}

export default AuthorsBlock