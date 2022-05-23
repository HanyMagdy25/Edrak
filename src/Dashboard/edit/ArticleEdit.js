import React, { useEffect, useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

const ArticleEdit = () => {
  const [name, setName] = useState("");
  const [writer, setWriter] = useState("");
  const [icon, setIcon] = useState();
  const [img, setImg] = useState();
  const [cat, setCat] = useState([]);
  const [about, setAbout] = useState("");
  const [trans, setTrans] = useState("");
  const [editor, setEditor] = useState("");
  const [body, setBody] = useState("");
  const [bodyVal, setBodyVal] = useState("");

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
      setBodyVal(res.msg.body);
      setIcon(res.msg.icon);
      setImg(res.msg.img);
      setTrans(res.msg.trans);
      setEditor(res.msg.editor);
      setWriter(res.msg.writer);
    };
    editWriterId();
  }, []);

  const handleChangeEditor = (value) => {
    console.log(value);
    setBody(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, writer,trans,editor, about, type: cat[0] };

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
    formData.append("body", editorRef.current.getContent());
    fetch(`${baseUrl}/article/${id}`, {
      method: "PUT",
      body: formData,
      credentials: "include",
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("res now ", res);
        setIsPending(false);
        if (res.status === "success") {
          history.push("/dashboard/allarticles");
        } else {
          alert(res.msg);
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
          <img src={img} alt="test" />
        </div>
        <div className="datails-content">
          <label>الصورة المربعة</label>
          <input
            type="file"
            onChange={(e) => {
              setIcon(e.target.files[0]);
            }}
          />
          <img src={icon} alt="test" />
        </div>
        <div className="datails-content">
          {/* <label>اسم الكاتب</label> */}
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
          <h3 className="choose-title">نوع المقال (يجب التحديد مجددا)</h3>
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

        <div className="datails-content">
          <label>اضافة مترجم/مدقق(اختيارى)</label>
          <input
            type="text"
            placeholder="اضافة مترجم(اختيارى)"
            value={trans}
            onChange={(e) => setTrans(e.target.value)}
          />
        </div>
        <div className="datails-content">
        <label>اضافة مترجم/مدقق(اختيارى)</label>
          <input
            type="text"
            placeholder="اضافة محرر (اختيارى)"
            value={editor}
            onChange={(e) => setEditor(e.target.value)}
          />
        </div>

        <div className="datails-content-text">
          <label className="lab-text-dash">نبذة عن المقال</label>
          <textarea value={about} onChange={(e) => setAbout(e.target.value)} />
        </div>

        <div className="editor-container">
          <Editor
            apiKey="htz0nznb6uk7q94cexoedjrudzji4w89jbd8f38lqopfmn6g"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={bodyVal}
            init={{
              height: 500,
              menubar: false,
              plugins:
                "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",

              menubar: "file edit view insert format tools table help",
              toolbar:
                "undo redo | bold italic underline strikethrough | " +
                "fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent | " +
                "numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print |" +
                "insertfile image media template link anchor codesample | ltr rtl",

              content_style:
                'body { font-family: "Amariya-Regular"; font-size:14px }',
            }}
          />
        </div>

        {!isPending && <button className="newButton">تحديث</button>}
        {isPending && <button className="newButton">جارى التحديث</button>}
      </form>
      <button type="click" onClick={log}>
        Log editor content
      </button>
    </div>
  );
};

export default ArticleEdit;
