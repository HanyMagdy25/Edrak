import React from 'react';
import './BigCard.css';
import card1b from "../assets/card1b.png"
import { Link } from 'react-router-dom';

const BigCard = ({data}) => {
  return (
    <Link className='card-link' to={`/article-inside`} >
      <div className='big-card'>
        {/* here we use a default Image called 'card1b' */}
        <img src={card1b} alt='BigCard' /> 
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
    </Link>
    
  )
}

export default BigCard