import React from "react";
import { Link } from "react-router-dom";
import "./MediumCard.css";

const MediumCard = ({ item, type,path }) => {
  return (
    <Link className="link-medium" to={`/${path}/${item._id}`}>
      <div className={"medium-card" + type}>
        <img src={item.img} alt="header" />
        <div className="medium-card-content">
          <h2>{item.name}</h2>
          <p>{item.about}</p>
          <div className="about-author-in-medium-card">
            <h6>{item.writer}</h6>
            <h5 className="share-icon-in-card">
              <i className="fa-solid fa-share-nodes"></i> {item.numberOfShare}
            </h5>
            <h5 className="cal">
              <i className="fa-solid fa-calendar-days"></i>{" "}
              {item.createdOn?.substring(0, 10)}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MediumCard;
