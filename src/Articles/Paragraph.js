import React from 'react'

const Paragraph = ({paragraph}) => {
  return (
    <div className='paragragh'>
        <h1>{paragraph.title}</h1>
        <p>{paragraph.article}</p>
    </div>
  )
}

export default Paragraph