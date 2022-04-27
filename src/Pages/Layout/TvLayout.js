import React from 'react';
import MediumCard from "../../Cards/MediumCard"
import "./TvLayout.css"

const TvLayout = ({title,items}) => {
  console.log("6 tests  : ",items)
  return (
    <>
        <div className="edrak-tv">
        <div className="edrak-tv-layout-container">
          <h1>{title}</h1>
          <hr />
          {/* <h2 style={{margin :"20px 0px 30px" , textAlign : "center"}}> يأتي قريباً</h2>
          <div className=""><Spinner/></div> */}
            {/* test */}
          <div className="edrak-tv-container-inner">

            {
              items.slice(0,1).map((item,index)=>(
            <div className="edrak-tv-right" key={index}>
              <div className="img-container">
                <img
                  src={item.img}
                  className="img-header"
                  alt="TvImage"
                />
              </div>
              <div className="tv-content">
                {/* <div className="global-simi-btn-purple">فكر</div> */}
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
                
              ))
            }

            <div className="edrak-tv-left">
              <div className="edrak-tv-left-container">
                {items?.slice(0,2).map((item,index)=>(
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