import React from 'react';
import "./Authors.css"

const AuthorsBlock = ({author}) => {
  return (
    <div className='authors-block'>
        <img src={author.imgUrl} alt='author' />
        <h3 style={{fontWeight:'400'}}>{author.name}</h3>
    </div>
  )
}

export default AuthorsBlock