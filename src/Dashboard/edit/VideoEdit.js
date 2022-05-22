import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

const VideoEdit = () => {
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
  const { id } = useParams();

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
    const editWriterId = async () => {
      const reqData = await fetch(`${baseUrl}/video/${id}`);
      const res = await reqData.json();
      console.log("res b", res);
      setName(res.msg.name);
      setAbout(res.msg.about);
      setWriter(res.msg.writer);
      setIcon(res.msg.icon);
      setImg(res.msg.img);
      setYoutube_url(res.msg.youtube_url)
    };
    editWriterId();
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
    const blog = { name, writer, youtube_url, series, about, type: cat[0] };

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
    fetch(`${baseUrl}/video/${id}`, {
      method: "PUT",
      body: formData,
      credentials: "include",
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res now from addVideo :", res);
        setIsPending(false);
        if (res.status === "success") {
            // window.location.reload()
            history.push("/dashboard/allvideos")
          } else {
            alert(res.msg)
          }
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
          <img src={img} alt="up"/>
        </div>
        <div className="datails-content">
          <label>الصورة المربعة</label>
          <input
            type="file"
            onChange={(e) => {
              setIcon(e.target.files[0]);
            }}
          />
          <img src={icon} alt="up"/>
        </div>
        <div className="datails-content">
          <label>تم اختيار ( {writer} ) سابقا</label>
          <select
            onChange={(e) => {
              setWriter(e.target.value);
            }}
          >
            <>
              <option value="">اختر مجددا من فضلك</option>
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
          <textarea value={about} onChange={(e) => setAbout(e.target.value)} />
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
              <>
              <option value="">اختر سلسلة</option>
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
              </>
            
          </select>
        </div>

        {!isPending && <button className="newButton">تحديث </button>}
        {isPending && <button className="newButton">جارى التحديث</button>}
      </form>
    </div>
  );
};

export default VideoEdit;
