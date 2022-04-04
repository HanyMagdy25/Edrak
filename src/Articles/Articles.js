import React, { useEffect, useState } from "react";
import BigCard from "../Cards/BigCard";
import "./Articles.css";
// import card1b from "../assets/card1b.png";
import { images } from "../constants";
import AuthorsBlock from "../Cards/AuthorsBlock";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncEdrak, getAllEdrak } from "../Redux/EdrakSlice";
import ReactPaginate from "react-paginate";
import $ from "jquery";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";




function coming() {
  let timerInterval;
  Swal.fire({
    title: "تأتي قريباً",
    timer: 5000,
    // timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });

  if (isMobile) {
    $(".navbar-toggler").trigger("click");
  }
}

const edrakAuthors = [
  {
    name: "أ. عبدالرحمن النحياني",
    imgUrl: images.author1,
  },
  {
    name: "د. هبة رءوف عزت",
    imgUrl: images.author2,
  },
  {
    name: "أ. نادية المطيري",
    imgUrl: images.author3,
  },
];

const Articles = () => {
  let dispatch = useDispatch();
  const edraks = useSelector(getAllEdrak);
  // const edraksAuthors= useSelector(getAllEdrakAuthors)
  useEffect(() => {
    dispatch(fetchAsyncEdrak());
    // dispatch(fetchAsyncEdrakAuthors());
  }, [dispatch]);
  // console.log("new edraks",edraks);

  const [category, setCategory] = useState(edraks);
  const filterResult = (cartItem) => {
    const result = edraks.filter((curData) => {
      return curData.cat.includes(cartItem);
      // old=>  curData.cat===cartItem
    });
    setCategory(result);
  };

  

  // Next And Prev
  // const [next,setNext] = useState({
  //   start:0,
  //   end:9
  // });
  // const [start,setStart] = useState(0);
  // const [end,setEnd] = useState(9);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(category.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // let dispatch = useDispatch();
  //   const edraks = useSelector(getAllEdrak);
  //   const edraksAuthors= useSelector(getAllEdrakAuthors)
  //   useEffect(() => {
  //       dispatch(fetchAsyncEdrak());
  //       dispatch(fetchAsyncEdrakAuthors());
  //     },[dispatch]);
  //   console.log("Header Data",edraks);
  //   console.log("edrak au",edraksAuthors);

  return (
    <div className="articles-parent">
      <div className="articles-parent-container">
        <div className="articles">
          {/* this is the way to filter the array */}

          {/* {cards.filter(person => person.share === '20').map((card) => 
              <BigCard  data={card} />
          )} */}
          {/* try */}

          {category.slice(pagesVisited, pagesVisited + usersPerPage).map((card, index) => (
            <BigCard key={index} data={card} inArt={true} />
          ))}
        </div>

        {/* ====== Left Side ======= */}
        <div className="categories">
          <div className="categories-container">
            <h3 className="categories-head-title">
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
              كُتاب إدراك
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
              <span>
                <a
                  href="#"
                  onClick={() => {
                    coming();
                  }}
                >
                  هوية
                </a>
              </span>
              <span>
                <a
                  href="#"
                  onClick={() => {
                    coming();
                  }}
                >
                  تعليم
                </a>
              </span>
              <span>
                <a
                  href="#"
                  onClick={() => {
                    coming();
                  }}
                >
                  معرض الكتاب
                </a>
              </span>
              <span>
                <a
                  href="#"
                  onClick={() => {
                    coming();
                  }}
                >
                  إمبريالية
                </a>
              </span>
              <span>
                <a
                  href="#"
                  onClick={() => {
                    coming();
                  }}
                >
                  روسيا
                </a>
              </span>
              <span>
                <a
                  href="#"
                  onClick={() => {
                    coming();
                  }}
                >
                  المعرفة
                </a>
              </span>
              <span>
                <a
                  href="#"
                  onClick={() => {
                    coming();
                  }}
                >
                  الحرب
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ======== Arrows ======= */}
      <div className="bottom-arrows">
      <ReactPaginate
        previousLabel={"السابق"}
        nextLabel={"التالى"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        pageRangeDisplayed={3}
        breakLabel="..."
      />
      </div>
    </div>
  );
};

export default Articles;
