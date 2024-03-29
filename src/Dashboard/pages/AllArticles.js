import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { fetchAsyncEdrak, getAllEdrak } from "../../Redux/EdrakSlice";

const AllArticles = () => {
  let dispatch = useDispatch();
  // const history = useHistory();
  const edraks = useSelector(getAllEdrak);
  useEffect(() => {
    dispatch(fetchAsyncEdrak());
  }, [dispatch]);

  console.log("edraks all articles page :", edraks);

  const handleDelete = (id) => {
    fetch(`https://depax-blog-backend.herokuapp.com/article/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.status === "success") {
          window.location.reload();
        } else {
          alert(res.msg);
        }
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
            <th>المشاركات</th>
            <th>النوع</th>
            <th>التاريخ</th>
            <th>مسح</th>
            <th>تعديل</th>
          </tr>
        </thead>
        <tbody>
          {edraks.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.writer}</td>
              <td>{item.numberOfShare}</td>
              <td>{item.type==="undefined" ? "غير محدد" : item.type}</td>
              <td>{item?.createdOn?.substring(0,10)}</td>
              <td>
                <span onClick={() => handleDelete(item.id)}>
                  <i className="fa-solid fa-trash"></i>
                </span>
              </td>
              <td>
                <Link to={`/dashboard/articleedit/${item.id}`}>
                  <span className="edit-dash">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllArticles;
