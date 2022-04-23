import React, { useState } from "react";


const AddWriter = () => {
  const [name, setName] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [photo, setPhoto] = useState();
  const [isPending, setIsPending] = useState(false);

  const token = localStorage.getItem("token");
    console.log("from writer:",token)

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const blog = { name, facebook, twitter };

    setIsPending(true);

    

    let formData = new FormData();
    for (const [key, value] of Object.entries(blog)) {
      formData.append(key, value);
    }

    formData.append("photo", photo);
    fetch("http://192.168.8.108:8080/user", {
      method: "POST",
      body: formData,
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res now ", res);
        setIsPending(false);
        //   navigate("/country");
      });
  };

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
