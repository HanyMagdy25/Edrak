import React from 'react';
import "./Authors.css"

const Authors = ({author}) => {
  return (
    <div className='authors'>
        <img src={author.imgUrl} alt='author' />
        <h4 style={{fontWeight:'400'}}>{author.name}</h4>
    </div>
  )
}

export default Authors