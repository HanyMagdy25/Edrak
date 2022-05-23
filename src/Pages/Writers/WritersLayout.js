import React from "react";
import { Link } from "react-router-dom";
import "./Writers.css";

const WritersLayout = ({ item, type }) => {
  return (
    <Link className={"writers-link" + type} to={`/writers-inside/${item._id}`}>
      <div className={"writersLayout" + type}>
        <div className="writersLayout-container">
          <div className="writersLayout-container-img" >
            <img src={item.thumbnail} alt="test" loading="lazy" />
          </div>

          <h3>{item.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default WritersLayout;
