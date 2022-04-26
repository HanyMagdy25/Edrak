import React from "react";
import "./BigCard.css";
import { Link } from "react-router-dom";

const BigCard = ({ data, type }) => {
  return (
    <Link className={"card-link" + type} to={`/article-inside/${data._id}`}>
      <div className="big-card">
        <img src={data.icon} alt="BigCard" />
        <div className="big-card-content">
          <h3>{`${data.name?.substring(0, 22)} ...`}</h3>
          <p>{`${data.about?.substring(0, 60)} ...`}</p>
          <div className="about-author-in-bigcard">
            <h5>{data.writer}</h5>
            <h5 className="share-icon-in-card">
              <i className="fa-solid fa-share-nodes"></i> {data.numberOfShare}
            </h5>
            <h5 className="cal">
              <i className="fa-solid fa-calendar-days"></i>{" "}
              {data.createdOn?.substring(0, 10)}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BigCard;
