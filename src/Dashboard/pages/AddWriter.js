import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import {Redirect} from "react-router-dom"


const AddWriter = () => {
  const [name, setName] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [photo, setPhoto] = useState();
  const [isPending, setIsPending] = useState(false);

  // const token = localStorage.getItem("token");
  //   console.log("from writer:",token)

  const history = useHistory();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const blog = { name, facebook, twitter };

    setIsPending(true);

    

    let formData = new FormData();
    for (const [key, value] of Object.entries(blog)) {
      formData.append(key, value);
    }
    formData.append('role', 'Author')

    formData.append("photo", photo);
    fetch("https://depax-blog-backend.herokuapp.com/user", {
      method: "POST",
      body: formData,
      credentials: 'include'
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res now ", res);
        setIsPending(false);
        history.push("/dashboard");
      });
  };

  // if (!token){
  //   return <Redirect to="/login" />
  // }

  return (
    
    <div className="add-page">
      <form onSubmit={handleSubmit}>
        <div className="datails-content">
          <label>اسم الكاتب</label>
          <input
            type="text"
            placeholder="اسم الكاتب"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="datails-content">
          <label>صورة الكاتب</label>
          <input
            type="file"
            placeholder="صورة الكاتب"
            onChange={(e) => {
              setPhoto(e.target.files[0]);
            }}
          />
        </div>
        <div className="datails-content">
          <label>لينك الفيس بوك</label>
          <input
            type="text"
            placeholder="لينك الفيس بوك"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
        <div className="datails-content">
          <label>لينك تويتر</label>
          <input
            type="text"
            placeholder="لينك تويتر"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        {!isPending && <button className="newButton">حفظ </button>}
        {isPending && <button className="newButton">جارى الحفظ</button>}
      </form>
    </div>
  );
};

export default AddWriter;
