import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

const WriterEdit = () => {
  const [isPending, setIsPending] = useState(false);
  // const [writerEdit, setWriterEdit] = useState({
  //   name: "",
  //   facebook: "",
  //   twitter: "",
  //   description: "",
  // });
  const [name, setName] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState();

  const { id } = useParams();
  const history = useHistory();

  // console.log("writer edit test :",writerEdit)

  useEffect(() => {
    const editWriterId = async () => {
      const reqData = await fetch(`${baseUrl}/user/${id}`);
      const res = await reqData.json();
      console.log("res b", res);
      // setWriterEdit(res);
      setName(res.msg.name);
      setFacebook(res.msg.facebook);
      setTwitter(res.msg.twitter);
      setDescription(res.msg.description);
      setPhoto(res.msg.thumbnail)
    };
    editWriterId();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, twitter, facebook, description };
    setIsPending(true);
    let formData = new FormData();
    for (const [key, value] of Object.entries(blog)) {
      formData.append(key, value);
    }
    formData.append("photo", photo);
    fetch(`${baseUrl}/user/${id}`, {
      method: "PUT",
      body: formData,
      credentials: "include",
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res now ", res);
        setIsPending(false);
        history.push("/dashboard/allwriters");
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
            placeholder="لينك  تويتر"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        <div className="datails-content-text">
          <label className="lab-text-dash">نبذة عن الكاتب</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="img-update">
          <img src={photo} alt="up"/>
        </div>
        {!isPending && <button className="newButton">تحديث</button>}
        {isPending && <button className="newButton">جارى التحديث</button>}
      </form>
    </div>
  );
};

export default WriterEdit;
