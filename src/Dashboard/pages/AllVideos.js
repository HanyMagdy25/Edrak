import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

const AllVideos = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`${baseUrl}/videos`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.msg);
        console.log("39 videos", data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://depax-blog-backend.herokuapp.com/video/${id}`, {
      method: "DELETE",
      credentials: "include",
    }).then(() => {
      console.log("video deleted successfully");
      history.push("/dashboard");
    });
  };

  return (
    <div className="add-page">
      <table>
        <caption>جميع المقالات</caption>
        <thead>
          <tr>
            <th>العنوان</th>
            <th>الكاتب</th>
            <th>التاريخ</th>
            <th>مسح</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.writer}</td>
              <td>{item.createdOn}</td>
              <td>
                <span onClick={() => handleDelete(item._id)}>
                  <i className="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllVideos;
