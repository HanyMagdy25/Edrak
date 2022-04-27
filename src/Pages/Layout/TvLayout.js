import React from 'react';
import { Link } from 'react-router-dom';
import MediumCard from "../../Cards/MediumCard"
import "./TvLayout.css"

const TvLayout = ({items}) => {
  console.log("6 from TVlayout : ",items)
  return (
    <>
        <div className="edrak-tv">
        <div className="edrak-tv-layout-container">
          <h1>{items.series}</h1>
          <hr />
          
          <div className="edrak-tv-container-inner">

            {
              items.videos.slice(0,1).map((item,index)=>(
                <Link className='tvlayout-link' to={`/tv-inside/${item._id}`}>
                
            <div className="edrak-tv-right" key={index}>
              <div className="img-container">
                <img
                  src={item.img}
                  className="img-header"
                  alt="TvImage"
                />
              </div>
              <div className="tv-content">
                
                <h2 className="header-headline">{item.name}</h2>
                <p className="header-paragragh">
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
                {items.videos?.slice(1,3).map((item,index)=>(
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

export default TvLayout