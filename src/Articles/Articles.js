import React, { useEffect, useState } from "react";
import BigCard from "../Cards/BigCard";
import "./Articles.css";
// import card1b from "../assets/card1b.png";
import { images } from "../constants";
import AuthorsBlock from "../Cards/AuthorsBlock";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncEdrak, getAllEdrak } from "../Redux/EdrakSlice";


// ======== Old Data - now our new data from db.json =========

// const cards = [
//   {
//     title: "إنزال التعليم العالي أرضًا",
//     description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
//     authorName: "أمجد عبدالرازق",
//     history: "20-3-2022",
//     share: "11",
//     cat: ["اقتصاد","هوية"],
//     imgUrl: images.card1b,
//   },
//   {
//     title: "إنزال التعليم العالي أرضًا",
//     description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
//     authorName: "أمجد عبدالرازق",
//     history: "9-3-2021",
//     share: "20",
//     cat: ["ترجمات","هوية"],
//     imgUrl: images.card2b,
//   },
//   {
//     title: "إنزال التعليم العالي أرضًا",
//     description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
//     authorName: "هانى مجدىٍ",
//     history: "22-1-2022",
//     share: "10",
//     cat: ["فكر","ترجمات"],
//     imgUrl: images.card3b,
//   },
//   {
//     title: "إنزال التعليم العالي أرضًا",
//     description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
//     authorName: "أمجد منير",
//     history: "25-3-2022",
//     share: "15",
//     cat: ["اجتماع","هوية"],
//     imgUrl: images.card1b,
//   },
//   {
//     title: "إنزال التعليم العالي أرضًا",
//     description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
//     authorName: "أمجد عبدالرازق",
//     history: "9-3-2021",
//     share: "20",
//     cat: ["فكر","هوية"],
//     imgUrl: images.card2b,
//   },
//   {
//     title: "إنزال التعليم العالي أرضًا",
//     description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
//     authorName: "هانى مجدىٍ",
//     history: "22-1-2022",
//     share: "10",
//     cat: ["فكر","اجتماع"],
//     imgUrl: images.card3b,
//   },
//   {
//     title: "إنزال التعليم العالي أرضًا",
//     description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
//     authorName: "أمجد منير",
//     history: "25-3-2022",
//     share: "15",
//     cat: ["تزكية","هوية"],
//     imgUrl: images.card1b,
//   },
//   {
//     title: "إنزال التعليم العالي أرضًا",
//     description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
//     authorName: "أمجد عبدالرازق",
//     history: "9-3-2021",
//     share: "20",
//     cat: ["فكر","هوية"],
//     imgUrl: images.card2b,
//   },
//   {
//     title: "إنزال التعليم العالي أرضًا",
//     description: "كيف تخدعنا السرديات الجاهزة عن إدراك المساحات الممكنة ؟",
//     authorName: "هانى مجدىٍ",
//     history: "22-1-2022",
//     share: "10",
//     cat: ["تزكية","هوية"],
//     imgUrl: images.card3b,
//   },
// ];


const edrakAuthors = [
  {
    name: "عمار رزق",
    imgUrl: images.author1,
  },
  {
    name: "مهند الهويدي",
    imgUrl: images.author2,
  },
  {
    name: "أمجد عبد الرازق",
    imgUrl: images.author3,
  },
];

const Articles = () => {

  let dispatch = useDispatch();
  const edraks = useSelector(getAllEdrak);
  // const edrakAuthorss = useSelector(getAllEdrakAuthors);
  // console.log("home authors",edraks); 
  useEffect(() => {
      dispatch(fetchAsyncEdrak());
      // dispatch(fetchAsyncEdrakAuthors());
      // console.log("this edraks",edraks)  
    },[dispatch]);
    console.log("articles page ",edraks); 

  const [category, setCategory] = useState(edraks);
  const filterResult = (cartItem) => {
    const result = edraks.filter((curData) => {
      return curData.cat.includes(cartItem);
      // old=>  curData.cat===cartItem
    });
    setCategory(result);
  };

  return (
    <div className="articles-parent">
      <div className="articles-parent-container">
        <div className="articles">
          {/* this is the way to filter the array */}

          {/* {cards.filter(person => person.share === '20').map((card) => 
              <BigCard  data={card} />
          )} */}
          {/* try */}

          {category.slice(0,9).map((card, index) => (
            <BigCard key={index} data={card} />
          ))}
          {/* <img src={require("")} alt="f" /> */}
        </div>
        {/* ====== Left Side ======= */}
        <div className="categories">
          <div className="categories-container">
            <h3 style={{ fontSize: "23px", fontWeight: "200" }}>
              جميع التصنيفات
            </h3>
            <hr />
            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                onClick={() => setCategory(edraks)}
              />
              جميع المقالات
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                onClick={() => filterResult("اقتصاد")}
              />
              اقتصاد
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                onClick={() => filterResult("اجتماع")}
              />
              اجتماع
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                onClick={() => filterResult("تزكية")}
              />
              تزكية
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                onClick={() => filterResult("ترجمات")}
              />
              ترجمات
            </label>

            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                onClick={() => filterResult("فكر")}
              />
              فكر
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                onClick={() => filterResult("هوية")}
              />
              هوية
            </label>

            {/* كتاب ادراك */}
            <h3
              style={{ fontSize: "23px", fontWeight: "200", marginTop: "20px" }}
            >
              كتاب إدراك
            </h3>
            <hr />
            <div className="edrak-authors-block">
              {edrakAuthors.map((author, index) => (
                <AuthorsBlock author={author} key={index} />
              ))}
            </div>

            {/* الكلمات الرائجة */}
            <h3
              style={{ fontSize: "23px", fontWeight: "200", marginTop: "20px" }}
            >
              الكلمات الرائجة
            </h3>
            <hr />
            <div className="hashtags">
              <span><a href="w">هوية</a></span> 
              <span><a href="w">تعليم</a></span> 
              <span><a href="w">معرض الكتاب</a></span> 
              <span><a href="w">إمبريالية</a></span> 
              <span><a href="w">روسيا</a></span> 
              <span><a href="w">المعرفة</a></span> 
              <span><a href="w">الحرب</a></span> 
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
