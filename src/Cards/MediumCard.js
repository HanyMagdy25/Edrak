import React from 'react';
import "./MediumCard.css"

const MediumCard = ({headerImg}) => {
  return (
    <div className='medium-card'>
        <img src={headerImg} alt='header' />
        <div className='medium-card-content'>
          <h2>مراجعة كتاب: فجر كل شيء</h2>
          <p>كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟</p>
          <div className='about-author-in-medium-card'>
                <h6>أمجد عبد الرازق</h6>
                <h5 className='share-icon-in-card'><i className="fa-solid fa-share-nodes"></i> 15</h5>
                <h5 className='cal'><i class="fa-solid fa-calendar-days"></i> 22-2-2022</h5>
          </div>
        </div>
    </div>
  )
}

export default MediumCard