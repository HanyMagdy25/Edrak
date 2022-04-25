import React, { useState } from "react";

const AddVideo = () => {
  const [name, setName] = useState("");
  const [writer, setWriter] = useState("");

  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [icon, setIcon] = useState();
  const [img, setImg] = useState();
//   const [photo, setPhoto] = useState();
  const [isPending, setIsPending] = useState(false);
  const [writersNames, setWritersNames] = useState([]);

  return (
    <div className="add-page">
      <form >
        <div className="datails-content">
          <label>اسم الفيديو</label>
          <input
            type="text"
            placeholder="اسم الكاتب"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="datails-content">
          <label>الصورة المستطيلة</label>
          <input
            type="file"
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
          />
        </div>
        <div className="datails-content">
          <label>الصورة المربعة</label>
          <input
            type="file"
            onChange={(e) => {
              setIcon(e.target.files[0]);
            }}
          />
        </div>
        <div className="datails-content">
          <label>اسم الكاتب</label>
          <select
            onChange={(e) => {
              setWriter(e.target.value);
            }}
          >
            {/* {console.log("90",writersNames)} */}
            {writersNames.map((n, index) => (
              <option
                value={n.id}
                onClick={(e) => {
                  console.log("onClick", e.target.value);
                }}
                key={index}
              >
                {n.name}
              </option>
            ))}
          </select>
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

export default AddVideo;
