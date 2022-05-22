import React, { useEffect, useState ,useRef } from "react";
import { useHistory } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';

const AddArticle = () => {
  const [name, setName] = useState("");
  const [writer, setWriter] = useState("");
  const [icon, setIcon] = useState();
  const [body, setBody] = useState("");

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

  // console.log('33 cat',cat)

  const history = useHistory();

  useEffect(() => {

    fetch("https://depax-blog-backend.herokuapp.com/users", {
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

  const handleChangeEditor = (value) => {
    console.log(value);
    setBody(value)
  }
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
    formData.append("body" , editorRef.current.getContent())
    fetch("https://depax-blog-backend.herokuapp.com/article", {
      method: "POST",
      body: formData,
      credentials: "include",

    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res now ", res);
        setIsPending(false);
        if (res.status === "success") {
          window.location.reload()
        } else {
          alert(res.msg)
        }

      });
  };
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
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
            {writersNames.map((n, index) => (
<<<<<<< HEAD
              <React.Fragment key={index}>
              <option value="">اختر كاتب</option>
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
              
=======
              <>
                <option value="">اختر كاتب  </option>
                <option
                  value={n.id}
                  onClick={(e) => {
                    console.log("onClick", e.target.value);
                  }}
                  key={index}
                >
                  {n.name}
                </option>
              </>
>>>>>>> 448e8bf3b95938cc2546628ffd4fb3832ee6cbb2
            ))}
          </select>
        </div>
        <div className="datails-content">
          <h3 className="choose-title">نوع المقال</h3>
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
          <label className="lab-text-dash">نبذة عن المقال</label>
          <textarea onChange={(e) => setAbout(e.target.value)} />
        </div>
        <div id="editor" onClick={(e) => test(e)}>test</div>
        {/* <div className="datails-content-container">
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
        </div> */}
        <Editor
          apiKey='htz0nznb6uk7q94cexoedjrudzji4w89jbd8f38lqopfmn6g'
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',

            menubar: 'file edit view insert format tools table help',
            toolbar: 'undo redo | bold italic underline strikethrough | ' +
            'fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent | '+ 
            'numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print |' +
            'insertfile image media template link anchor codesample | ltr rtl',

            content_style: 'body { font-family: "Amariya-Regular"; font-size:14px }'
          }}
        />


        {!isPending && <button className="newButton">حفظ </button>}
        {isPending && <button className="newButton">جارى الحفظ</button>}
      </form>
      <button type="click" onClick={log}>Log editor content</button>

    </div>
  );
};

export default AddArticle;
