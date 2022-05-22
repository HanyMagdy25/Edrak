import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

const ArticleEdit = () => {
  const [name, setName] = useState("");
  const [writer, setWriter] = useState("");
  const [icon, setIcon] = useState();
  const [img, setImg] = useState();
  const [cat, setCat] = useState([]);
  const [about, setAbout] = useState("");
  const [parag1, setParag1] = useState([]);
  const [parag2, setParag2] = useState([]);
  const [parag3, setParag3] = useState([]);
  const [parag4, setParag4] = useState([]);
  const [parag5, setParag5] = useState([]);
  const [parag6, setParag6] = useState([]);
  const [parag7, setParag7] = useState([]);
  const [parag8, setParag8] = useState([]);
  const [parag9, setParag9] = useState([]);

  const [isPending, setIsPending] = useState(false);

  // to fetch writers names
  const [data, setData] = useState([]);
  const [writersNames, setWritersNames] = useState([]);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`${baseUrl}/users`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
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
      const reqData = await fetch(`${baseUrl}/article/${id}`);
      const res = await reqData.json();
      console.log("res b", res);
      setName(res.msg.name);
      setAbout(res.msg.about);
      //   setTwitter(res.msg.twitter);
      //   setDescription(res.msg.description);
      //   setPhoto(res.msg.thumbnail)
    };
    editWriterId();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, writer, about, type: cat[0] };

    // console.log('type 75: ',type)

    setIsPending(true);

    let formData = new FormData();
    for (const [key, value] of Object.entries(blog)) {
      formData.append(key, value);
    }
    formData.append("paragraphs", parag1);
    formData.append("paragraphs", parag2);
    formData.append("paragraphs", parag3);
    formData.append("paragraphs", parag4);
    formData.append("paragraphs", parag5);
    formData.append("paragraphs", parag6);
    formData.append("paragraphs", parag7);
    formData.append("paragraphs", parag8);
    formData.append("paragraphs", parag9);
    cat.forEach((e) => formData.append("cat", e));
    console.log("84", formData.getAll("cat"));

    formData.append("photos", icon);
    formData.append("photos", img);
    fetch("https://depax-blog-backend.herokuapp.com/article", {
      method: "PUT",
      body: formData,
      credentials: "include",
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res now ", res);
        setIsPending(false);
        if (res.status === "success") {
          history.push("/dashboard");
        } else {
          alert(res.msg);
        }
      });
  };
  return (
    <div className="add-page">
      <form onSubmit={handleSubmit}>
        <div className="datails-content">
          <label>اسم المقالة</label>
          <input
            type="text"
            placeholder="اسم المقالة"
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

        <div className="datails-content-text">
          <label className="lab-text-dash">نبذة عن المقال</label>
          <textarea value={about} onChange={(e) => setAbout(e.target.value)} />
        </div>

        <div className="datails-content-container">
          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 1</label>
            <textarea
              onChange={(e) => setParag1([e.target.value, parag1[1]])}
            />
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 1</label>
            <textarea
              onChange={(e) => setParag1([parag1[0], e.target.value])}
            />
          </div>

          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 2</label>
            <textarea
              onChange={(e) => setParag2([e.target.value, parag2[1]])}
            />
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 2</label>
            <textarea
              onChange={(e) => setParag2([parag2[0], e.target.value])}
            />
          </div>

          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 3</label>
            <textarea
              onChange={(e) => setParag3([e.target.value, parag3[1]])}
            />
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 3</label>
            <textarea
              onChange={(e) => setParag3([parag3[0], e.target.value])}
            />
          </div>

          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 4</label>
            <textarea
              onChange={(e) => setParag4([e.target.value, parag4[1]])}
            />
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 4</label>
            <textarea
              onChange={(e) => setParag4([parag4[0], e.target.value])}
            />
          </div>

          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 5</label>
            <textarea
              onChange={(e) => setParag5([e.target.value, parag5[1]])}
            />
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 5</label>
            <textarea
              onChange={(e) => setParag5([parag5[0], e.target.value])}
            />
          </div>

          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 6</label>
            <textarea
              onChange={(e) => setParag6([e.target.value, parag6[1]])}
            />
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 6</label>
            <textarea
              onChange={(e) => setParag6([parag6[0], e.target.value])}
            />
          </div>

          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 7</label>
            <textarea
              onChange={(e) => setParag7([e.target.value, parag7[1]])}
            />
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 7</label>
            <textarea
              onChange={(e) => setParag7([parag7[0], e.target.value])}
            />
          </div>

          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 8</label>
            <textarea
              onChange={(e) => setParag8([e.target.value, parag8[1]])}
            />
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 8</label>
            <textarea
              onChange={(e) => setParag8([parag8[0], e.target.value])}
            />
          </div>

          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 9</label>
            <textarea
              onChange={(e) => setParag9([e.target.value, parag9[1]])}
            />
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 9</label>
            <textarea
              onChange={(e) => setParag9([parag9[0], e.target.value])}
            />
          </div>
        </div>

        {!isPending && <button className="newButton">تحديث</button>}
        {isPending && <button className="newButton">جارى التحديث</button>}
      </form>
    </div>
  );
};

export default ArticleEdit;
