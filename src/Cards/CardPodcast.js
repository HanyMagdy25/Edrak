import React from "react";
import "./CardPodcast.css";
// import headerImg from "../assets/header.png";
// import card2b from "../assets/card2b.png"

const CardPodcast = ({ item }) => {
  return (
    <div className="cardPodcast">
      {/* here we use a default Image called 'card1b' */}
      <img src={item.icon} alt="article" />
      <div className="podcast-content">
        <div className="global-simi-btn-red">
          {item.type === "undefined" ? "فكر" : item.type}
        </div>
        <h2>{item.name}</h2>
        <p>{item.about}</p>
        <div className="about-author-cardPodcast">
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
  );
};

export default CardPodcast;
