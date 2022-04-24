import React, { useEffect, useState } from "react";

const AddArticle = () => {
  const [name, setName] = useState("");
  const [writer, setWriter] = useState("");
  // const [facebook, setFacebook] = useState("");
  // const [twitter, setTwitter] = useState("");
  // const [photo, setPhoto] = useState();
  const [icon, setIcon] = useState();
  const [img, setImg] = useState();
  const [cat, setCat] = useState([]);
  const [about, setAbout] = useState("");

  const [paragraphs, setParagraphs] = useState([]);
  const [parag1, setParag1] = useState([]);
  const [parag2, setParag2] = useState([]);
  const [parag3, setParag3] = useState([]);
  const [parag4, setParag4] =useState([]);
  
  const [isPending, setIsPending] = useState(false);

  // to fetch writers names
  const [data, setData] = useState([]);
  const [writersNames, setWritersNames] = useState([]);

  // console.log('24',parag)

  // const addCat =()=>{
  //   setCat([...cat],value)
  // }
  // let writersNames=[];

  // شيل الكومنت دا يوم السبت من 20 ل 31

  // useEffect(() => {
  //   fetch("http://192.168.8.108:8080/users")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //       setWritersNames( data.msg.map(e=>{return {id: e._id, name: e.name}}))

  //     });

  // }, []);

  // const writersNames = data.msg.map(e=>e.name)
  // if(data.length>0){
  //   console.log("30",data.msg.map((e) => e.name));
  // const writersNames = data.msg.map((e) => e.name);
  // console.log(writersNames);
  // }

  // if (!writersNames) {
  //   <div>waiting....</div>;
  // }
  // console.log("cat", cat);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, writer ,cat,about };

    setIsPending(true);

    let formData = new FormData();
    for (const [key, value] of Object.entries(blog)) {
      formData.append(key, value);
    }
    formData.append("paragraphs",parag1)
    formData.append("paragraphs",parag2)
    formData.append("paragraphs",parag3)
    formData.append("paragraphs",parag4)
    // console.log('84',parag1)

    formData.append("photos", icon);
    formData.append("photos", img);
    fetch("http://192.168.8.108:8080/article", {
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
          <h3 className="choose-title">نوع المقال</h3>
          <div className="check-container">
            <label>فكر</label>
            <input
              type="checkbox"
              // onChange={(e) => setCat(e.target.value)}
              onChange={(e) => setCat(cat.concat(e.target.value))}
              value="فكر"
              // value={twitter}
              // onChange={(e) => setTwitter(e.target.value)}
            />
          </div>
          <div className="check-container">
            <label>هوية</label>
            <input
              type="checkbox"
              // onChange={(e) => setCat(e.target.value)}
              onChange={(e) => setCat(cat.concat(e.target.value))}
              value="هوية"
              // value={twitter}
              // onChange={(e) => setTwitter(e.target.value)}
            />
          </div>
          <div className="check-container">
            <label>اقتصاد</label>
            <input
              type="checkbox"
              onChange={(e) => setCat(cat.concat(e.target.value))}
              value="اقتصاد"
              // value={twitter}
              // onChange={(e) => setTwitter(e.target.value)}
            />
          </div>
          <div className="check-container">
            <label>اجتماع</label>
            <input
              type="checkbox"
              onChange={(e) => setCat(cat.concat(e.target.value))}
              value="اجتماع"
              // value={twitter}
              // onChange={(e) => setTwitter(e.target.value)}
            />
          </div>
          <div className="check-container">
            <label>تزكية</label>
            <input
              type="checkbox"
              onChange={(e) => setCat(cat.concat(e.target.value))}
              value="تزكية"
              // value={twitter}
              // onChange={(e) => setTwitter(e.target.value)} ترجمات
            />
          </div>
          <div className="check-container">
            <label>ترجمات</label>
            <input
              type="checkbox"
              onChange={(e) => setCat(cat.concat(e.target.value))}
              value="ترجمات"
              // value={twitter}
              // onChange={(e) => setTwitter(e.target.value)} ترجمات
            />
          </div>
        </div>
        <div className="datails-content-text">
          <label className="lab-text-dash">نبذة عن المقال</label>
          <textarea onChange={(e)=>setAbout(e.target.value)}/>
        </div>

        <div className="datails-content-container">
          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 1</label>
          <textarea onChange={(e)=>setParag1([e.target.value,parag1[1]])}/>
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 1</label>
          <textarea onChange={(e)=>setParag1([parag1[0],e.target.value])}/>
          </div>

          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 2</label>
          <textarea onChange={(e)=>setParag2([e.target.value,parag2[1]])}/>
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 2</label>
          <textarea onChange={(e)=>setParag2([parag2[0],e.target.value])}/>
          </div>

          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 3</label>
          <textarea onChange={(e)=>setParag3([e.target.value,parag3[1]])}/>
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 3</label>
          <textarea onChange={(e)=>setParag3([parag3[0],e.target.value])}/>
          </div>

          <div className="datails-content-text">
            <label className="lab-text-dash">عنوان 4</label>
          <textarea onChange={(e)=>setParag4([e.target.value,parag4[1]])}/>
          </div>
          <div className="datails-content-text">
            <label className="lab-text-dash">موضوع 4</label>
          <textarea onChange={(e)=>setParag4([parag4[0],e.target.value])}/>
          </div>
          
        </div>


        {!isPending && <button className="newButton">حفظ </button>}
        {isPending && <button className="newButton">جارى الحفظ</button>}
      </form>
    </div>
  );
};

export default AddArticle;
