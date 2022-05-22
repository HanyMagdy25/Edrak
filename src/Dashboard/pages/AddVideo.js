import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

const AddVideo = () => {
  const [name, setName] = useState("");
  const [writer, setWriter] = useState("");

  // const [facebook, setFacebook] = useState("");
  const [youtube_url, setYoutube_url] = useState("");
  const [icon, setIcon] = useState();
  const [img, setImg] = useState();
  const [cat, setCat] = useState([]);
  //   const [photo, setPhoto] = useState();
  // const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [writersNames, setWritersNames] = useState([]);
  const [seriesNames, setSeriesNames] = useState([]);
  const [series, setSeries] = useState("");
  const [about, setAbout] = useState("");

  const history = useHistory();

  useEffect(() => {
    fetch(`${baseUrl}/users`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setData(data);
        console.log("47", data);
        setWritersNames(
          data.msg.map((e) => {
            return { id: e._id, name: e.name };
          })
        );
      });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/serieses`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setData(data);
        console.log("serieses: ", data);
        setSeriesNames(
          data.msg.map((e) => {
            return { id: e._id, series: e.name };
          })
        );
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, writer, youtube_url,series ,about, type: cat[0] };

    // console.log('type 75: ',type)

    setIsPending(true);

    let formData = new FormData();
    for (const [key, value] of Object.entries(blog)) {
      formData.append(key, value);
    }

    cat.forEach((e) => formData.append("cat", e));
    console.log("84", formData.getAll("cat"));

    formData.append("photos", icon);
    formData.append("photos", img);
    fetch("https://depax-blog-backend.herokuapp.com/video", {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res now from addVideo :", res);
        setIsPending(false);
        history.push("/dashboard");
      });
  };

  return (
    <div className="add-page">
      <form onSubmit={handleSubmit}>
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
            <   >
              <option value="">اختر كاتب</option>
              {writersNames.map((n, index) => (
                <React.Fragment key={index}>
                  <option
                    value={n.id}
                    onClick={(e) => {
                      console.log("onClick", e.target.value);
                    }}
                    // key={index}
                  >
                    {n.name}
                  </option>
                </React.Fragment>
              ))}
            </>
          </select>
        </div>
        <div className="datails-content">
          <h3 className="choose-title">نوع الفيديو</h3>
          <div className="check-container">
            <label>فكر</label>
            <input
              type="checkbox"
              onChange={(e) => setCat(cat.concat(e.target.value))}
              value="فكر"
            />
          </div>
          <div className="check-container">
            <label>هوية</label>
            <input
              type="checkbox"
              onChange={(e) => setCat(cat.concat(e.target.value))}
              value="هوية"
            />
          </div>
          <div className="check-container">
            <label>اقتصاد</label>
            <input
              type="checkbox"
              onChange={(e) => setCat(cat.concat(e.target.value))}
              value="اقتصاد"
            />
          </div>
          <div className="check-container">
            <label>اجتماع</label>
            <input
              type="checkbox"
              onChange={(e) => setCat(cat.concat(e.target.value))}
              value="اجتماع"
            />
          </div>
          <div className="check-container">
            <label>تزكية</label>
            <input
              type="checkbox"
              onChange={(e) => setCat(cat.concat(e.target.value))}
              value="تزكية"
            />
          </div>
          <div className="check-container">
            <label>ترجمات</label>
            <input
              type="checkbox"
              onChange={(e) => setCat(cat.concat(e.target.value))}
              value="ترجمات"
            />
          </div>
        </div>
        <div className="datails-content-text">
          <label className="lab-text-dash">نبذة عن الفيديو</label>
          <textarea onChange={(e) => setAbout(e.target.value)} />
        </div>

        <div className="datails-content-youtube">
          <label className="lab-text-dash">لينك الفيديو يوتيوب</label>
          <input
            type="text"
            placeholder="لينك الفيديو"
            value={youtube_url}
            onChange={(e) => setYoutube_url(e.target.value)}
          />
        </div>

        <div className="datails-content">
          <label>السلسلة التابع لها</label>
          <select
            onChange={(e) => {
              setSeries(e.target.value);
            }}
          >
            {seriesNames.map((n, index) => (
              <option
                value={n.id}
                onClick={(e) => {
                  console.log("onClick", e.target.value);
                }}
                key={index}
              >
                {n.series} 
              </option>
            ))}
          </select>
        </div>
        <div>
          <Link to="/dashboard/addseries">
          <button className="newButton">اضافة سلسلة</button>
          </Link>
        </div>
        


        {!isPending && <button className="newButton">حفظ </button>}
        {isPending && <button className="newButton">جارى الحفظ</button>}
      </form>
    </div>
  );
};

export default AddVideo;
