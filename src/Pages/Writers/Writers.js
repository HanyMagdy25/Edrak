import React, { useEffect, useState } from "react";
import "./Writers.css";
import WritersLayout from "./WritersLayout";

const Writers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/writers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log("55", data);
      });
  }, []);

  return (
    <div className="writers">
      <div className="writers-container">
        <h1>أبرز الكتاب</h1>
        <hr />
        <div className="writer-cards">
          {data.slice(0, 8).map((item, index) => (
            <WritersLayout item={item} key={index} type='first' />
          ))}
        </div>

        <h1>أحدث الكتاب</h1>
        <hr />
        <div className="writer-cards">
          {data.slice(0, 10).map((item, index) => (
            <WritersLayout item={item} key={index} type='second' />
          ))}
        </div>

        <h1>المترجمون</h1>
        <hr />
        <div className="writer-cards">
          {data.slice(0, 18).map((item, index) => (
            <WritersLayout item={item} key={index} type='third' />
          ))}
        </div>


      </div>
    </div>
  );
};

export default Writers;
