import React from 'react';
import { Link } from 'react-router-dom';
import MediumCard from "../../Cards/MediumCard"
import "./TvLayoutHome.css"

const TvLayoutHome = ({items,title}) => {
  return (
    <>
        <div className="edrak-tv">
        <div className="edrak-tv-layout-container">
          <h1>{title}</h1>
          <hr />
          
          <div className="edrak-tv-container-inner">

            {
              items.slice(0,1).map((item,index)=>(
                <Link className='tvlayout-link' to={`/tv-inside/${item._id}`} key={index}>
                
            <div className="edrak-tv-right-in-home" >
              <div className="img-container">
                <img
                  src={item.img}
                  className="img-header"
                  alt="TvImage"
                />
              </div>
              <div className="tv-content-in-home">
              <div className="global-simi-btn">{item.type}</div>
                <h2 className="header-headline">{item.name}</h2>
                <p className="header-paragragh-in-home">
                  {item.about}
                </p>
                <div className="about-author">
                  <h5>{item.writer}</h5>
                  <div className="share-icon">
                    <i className="fa-solid fa-share-nodes"></i> {item.numberOfShare}
                  </div>
                  <div className="cal">
                    <i className="fa-solid fa-calendar-days"></i> {item.createdOn?.substring(0, 10)}
                  </div>
                </div>
              </div>
            </div>
                </Link>
                
              ))
            }

            <div className="edrak-tv-left">
              <div className="edrak-tv-left-container">
                {items?.slice(1,3).map((item,index)=>(
                  <MediumCard item={item} type="zero" key={index} path="tv-inside" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TvLayoutHome