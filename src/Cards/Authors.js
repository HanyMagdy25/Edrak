import React from 'react';
import "./Authors.css"

const Authors = ({author}) => {
  return (
    <div className='authors'>
        <div className='img-contain'>
          <img src={author.imgUrl} alt='author' />
        </div>
        <div className='name-contain'>
          <h4 >{author.name}</h4>
        </div>
    </div>
  )
}

export default Authors