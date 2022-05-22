import React, { useEffect, useState } from "react";
import "./ArticleInside.css";
import BigCard from "../Cards/BigCard";
import HeaderLeft from "../Header/HeaderLeft";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import Paragraph from "./Paragraph";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncEdrak, getAllEdrak } from "../Redux/EdrakSlice";
import { useParams } from "react-router-dom";
// jquery
import $ from "jquery";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";
import Spinner from "../constants/Spinner";
const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;

const baseUrl = "https://depax-blog-backend.herokuapp.com";

// To Copy The URL
function copy() {
  const el = document.createElement("input");
  el.value = window.location.href;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  // alert('URL Copied');
}

const ArticleInside = () => {
  const [edrakAuthors, setEdrakAuthors] = useState([]);

  const { _id } = useParams();
  console.log("id:", _id);
  let dispatch = useDispatch();
  const edraks = useSelector(getAllEdrak);
  useEffect(() => {
    fetch(`${baseUrl}/users?role=Author`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEdrakAuthors(data.msg);
        console.log("77 edrakAuthors", data);
      });
  }, []);

  useEffect(() => {
    dispatch(fetchAsyncEdrak());
  }, [dispatch]);
  console.log("new edraks", edraks);

  const articleIn = edraks.find((a) => a._id === _id);
  console.log("article in :", articleIn);

  if (!articleIn) {
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );
  }
  const stringToHTML = function (str) {
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(str);
    const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
    console.log(reactHtml);
    return reactHtml
  };
  // to copy the url and pass to facebook icon
  const url = window.location.href;

  // Copied Alert With JQuery
  function copyAlert() {
    let timerInterval;
    Swal.fire({
      title: "تم نسخ الرابط",
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

  const handleShare = () => {
    fetch(`${baseUrl}/article_share/${articleIn.id}`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("share counter :", data);
      });
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-right">
          <div className="header-right-content">
            <div className="global-simi-btn">{articleIn.type ==="undefined" ? "فكر": articleIn.type }</div>
            <h1 className="header-headline">{articleIn.name}</h1>
            <div className="about-author-article">
              <h6>{articleIn.writer}</h6>
              <div className="share-icon">
                <h6>
                  <i className="fa-solid fa-share-nodes"></i>{" "}
                  {articleIn.numberOfShare}
                </h6>
              </div>
              <div className="cal">
                <h6>
                  <i className="fa-solid fa-calendar-days"></i>{" "}
                  {articleIn.createdOn.substring(0, 10)}
                </h6>
              </div>
            </div>
            <div className="social-icons-small-articalInside">
              <span
                onClick={() => {
                  copy();
                  copyAlert();
                }}
              >
                <i className="fa-solid fa-share-from-square"></i>
              </span>
              <span onClick={handleShare}>
                <TwitterShareButton url={url}>
                  <i className="fa-brands fa-twitter"></i>
                </TwitterShareButton>
              </span>
              <span onClick={handleShare}>
                <FacebookShareButton url={url}>
                  <i className="fa-brands fa-facebook-f"></i>
                </FacebookShareButton>
              </span>
            </div>
          </div>
          <div className="img-container">
            <img src={articleIn.img} className="img-header" alt="headerImage" />
          </div>
          {/* هنا المقالات بتغير الداتا من فوق */}
          <div className="big-paragraph">
            <div dangerouslySetInnerHTML={{ __html: articleIn.body }} />

            {/* {articleIn.paragraphs.map((paragraph, index) => (
              <Paragraph paragraph={paragraph} key={index} />
            ))} */}
          </div>

          {/* المزيد من المدونات */}
          <div className="more-blogs">
            <h1>المزيد من المدونات</h1>
            <hr />
            <div className="articles-inside">
              {edraks.slice(0, 3).map((card, index) => (
                <BigCard key={index} data={card} type="three" path="article-inside" />
              ))}
            </div>
          </div>
        </div>

        <div className="header-left">
          <HeaderLeft data={edraks} edrakAuthors={edrakAuthors} />
        </div>
      </div>
    </div>
  );
};

export default ArticleInside;
