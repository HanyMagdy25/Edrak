import React from 'react';
import "./Card.css"

const Card = ({headerImg , paragraph}) => {
  return (
    <div className='card'>
        <div className='card-container-img'>
            <img className='card-img' src={headerImg} alt='fff' />
        </div>
        <div className='card-container-content'>
            <div className='card-container-content-container'>
                <div className='global-simi-btn-small-blue'>مراجعات</div>
                <h3>مراجعة كتاب : فجر كل شئ</h3>
                <p>{paragraph}</p>

                <div className='about-author-in-card'>
                        <h6>أمجد عبد الرازق</h6>
                        <h5 className='share-icon-in-card'><i className="fa-solid fa-share-nodes"></i> 10</h5>
                        <h5 className='cal'><i class="fa-solid fa-calendar-days"></i> 22-2-2022</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card