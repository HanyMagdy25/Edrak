import React from 'react';
import "./Card.css"

const Card = ({headerImg , paragraph,item}) => {
  return (
    <div className='card'>
        <div className='card-container-img'>
            <img className='card-img' src={item.imgUrl} alt='cardImage' />
        </div>
        <div className='card-container-content'>
            <div className='card-container-content-container'>
                <div className='global-simi-btn-small-blue'>{item.button}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className='about-author-in-card'>
                        <h6>{item.authorName}</h6>
                        <h5 className='share-icon-in-card'><i className="fa-solid fa-share-nodes"></i> {item.share}</h5>
                        <h5 className='cal'><i className="fa-solid fa-calendar-days"></i> {item.history}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card