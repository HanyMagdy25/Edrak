import React from 'react';
import "./Authors.css"

const Authors = ({ammarImg,authorName}) => {
  return (
    <div className='authors'>
        <img src={ammarImg} alt='' />
        <h4 style={{fontWeight:'400'}}>{authorName}</h4>
    </div>
  )
}

export default Authors