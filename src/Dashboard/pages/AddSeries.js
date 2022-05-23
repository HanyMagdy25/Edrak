import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

const AddSeries = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  useEffect(() => {
    fetch(`${baseUrl}/serieses`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.msg);
        console.log("serieses", data.msg);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name };

    setIsPending(true);

    fetch(`${baseUrl}/series`, {
      method: "POST",
      body: JSON.stringify(blog),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res series ", res);
        setIsPending(false);
        if (res.status === "success") {
          window.location.reload()
          // history.push("/dashboard/allarticles")
        } else {
          alert(res.msg)
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`${baseUrl}/series/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
    .then((data) => data.json())
    .then((res) => {
      if (res.status === "success") {
        window.location.reload()
      } else {
        alert(res.msg)
      }
    });
  };

  return (
    <div className="add-page">
      <form onSubmit={handleSubmit}>
        <div className="datails-content">
          <label>اسم السلسلة</label>
          <input
            type="text"
            placeholder="اسم السلسلة"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {!isPending && <button className="newButton">حفظ </button>}
        {isPending && <button className="newButton">جارى الحفظ</button>}
      </form>

      <table>
        <caption>جميع السلسلات</caption>
        <thead>
          <tr>
            <th>اسم السلسلة</th>
            <th>عدد الفيديوهات</th>
            {/* <th>التاريخ</th> */}
            <th>مسح</th>
            <th>تعديل</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item?.videos?.length}</td>
              {/* <td>{item.createdOn}</td> */}
              <td>
                <span onClick={() => handleDelete(item._id)}>
                  <i className="fa-solid fa-trash"></i>
                </span>
              </td>
              <td>
                <Link to={`/dashboard/seriesedit/${item._id}`}>
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

export default AddSeries;
