import React from 'react';
import './BigCard.css';

const BigCard = ({headerImg,data}) => {
  return (
    <div className='big-card'>
        <img src={data.imgUrl} alt='header' />
        <div className='big-card-content'>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <div className='about-author-in-bigcard'>
                <h6>{data.authorName}</h6>
                <h5 className='share-icon-in-card'><i className="fa-solid fa-share-nodes"></i> {data.share}</h5>
                <h5 className='cal'><i className="fa-solid fa-calendar-days"></i> {data.history}</h5>
          </div>
        </div>
    </div>
  )
}

export default BigCard