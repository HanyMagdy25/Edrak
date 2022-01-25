import React from 'react';
import './Movies.css';
const Movies = ({title , image,year ,type}) => {
    return (
        <div className='media'>
            <img className='poster' src={image} alt={title}/>
            <p className='title'>{title} ({year})</p>
            <span className='type'>{type}</span>
        </div>
    )
}

export default Movies