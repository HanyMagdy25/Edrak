import React from "react";
import { Link } from "react-router-dom";

const HeaderSlider = ({ slide }) => {
  console.log("slide : ", slide);
  return (
    <>
      <Link className="card-link" to={`/article-inside/${slide._id}`}>
        <div className="img-container">
          <img src={slide.img} className="img-header" alt="headerImage" />
        </div>
        <div className="header-right-content">
          <div className="global-simi-btn">{slide.type}</div>
          <h2 className="header-headline">{slide.name}</h2>
          <p className="header-paragragh">{slide.about}</p>
          <div style={{ marginBottom: "50px" }} className="about-author">
            <h5>{slide.writer}</h5>
            <div className="share-icon">
              <i className="fa-solid fa-share-nodes"></i> {slide.numberOfShare}
            </div>
            <div className="cal">
              <i className="fa-solid fa-calendar-days"></i>{" "}
              {slide.createdOn.substring(0, 10)}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HeaderSlider;
