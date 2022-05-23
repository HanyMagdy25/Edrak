import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

const SeriesEdit = () => {
    const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const editWriterId = async () => {
      const reqData = await fetch(`${baseUrl}/series/${id}`);
      const res = await reqData.json();
      console.log("res b", res);
      setName(res.msg.name);
    };
    editWriterId();
  }, []);

  console.log("name",name)

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name };

    setIsPending(true);

    fetch(`${baseUrl}/series/${id}`, {
      method: "PUT",
      body: JSON.stringify(blog),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res series ", res);
        setIsPending(false);
        if (res.status === "success") {
          history.push("/dashboard/addseries")
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

        {!isPending && <button className="newButton">تحديث </button>}
        {isPending && <button className="newButton">جارى التحديث</button>}
      </form>

      
    </div>
  )
}

export default SeriesEdit