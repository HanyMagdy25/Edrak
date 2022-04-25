import React, { useEffect, useState } from "react";
import "./Writers.css";
import WritersLayout from "./WritersLayout";
import Spinner from "./../../constants/Spinner";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

const Writers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/users?role=Author`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.msg);
        console.log("55", data);
      });
  }, []);

  // loading page
  if (!data.length > 0) {
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="writers">
      <div className="writers-container">
        <h1>أبرز الكتاب</h1>
        <hr />
        <div className="writer-cards">
          {data.slice(0, 8).map((item, index) => (
            <WritersLayout item={item} key={index} type="first" />
          ))}
        </div>

        <h1>أحدث الكتاب</h1>
        <hr />
        <div className="writer-cards">
          {data.slice(0, 10).map((item, index) => (
            <WritersLayout item={item} key={index} type="second" />
          ))}
        </div>

        <h1>المترجمون</h1>
        <hr />
        <div className="writer-cards">
          {data.slice(0, 18).map((item, index) => (
            <WritersLayout item={item} key={index} type="third" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Writers;
