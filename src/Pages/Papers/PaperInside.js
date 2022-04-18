import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";
// jquery
import $ from "jquery";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";
import Spinner from "../../constants/Spinner";
import MediumCard from "../../Cards/MediumCard";

const PaperInside = () => {
  const [data, setData] = useState([]);
  const { _id } = useParams();
  console.log("id:", _id);

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

  // to copy the url and pass to facebook icon
  const url = window.location.href;

  useEffect(() => {
    fetch("http://localhost:8000/papers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log("papers", data);
      });
  }, []);

  const paperInsider = data.find((a) => a._id === _id);
  console.log("tvInsider 22 :", paperInsider);

  if (!paperInsider) {
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="paperInside">
      <div className="paperinside-content">
        <div className="global-simi-btn">{paperInsider.type}</div>
        <h1 className="header-headline">{paperInsider.name}</h1>
        <p className="header-paragragh">{paperInsider.about}</p>
        <div className="both-share-author">
          <div className="about-author-tvinside">
            <h6>{paperInsider.writer}</h6>
            <div className="share-icon">
              <h6>
                <i className="fa-solid fa-share-nodes"></i>{" "}
                {paperInsider.numberOfShare}
              </h6>
            </div>
            <div className="cal">
              <h6>
                <i className="fa-solid fa-calendar-days"></i>{" "}
                {paperInsider.createdOn.substring(0, 10)}
              </h6>
            </div>
          </div>
          <div className="social-icons-small">
            <span
              onClick={() => {
                copy();
                copyAlert();
              }}
            >
              <i className="fa-solid fa-share-from-square"></i>
            </span>
            <span>
              <TwitterShareButton url={url}>
                <i className="fa-brands fa-twitter"></i>
              </TwitterShareButton>
            </span>
            <span>
              <FacebookShareButton url={url}>
                <i className="fa-brands fa-facebook-f"></i>
              </FacebookShareButton>
            </span>
          </div>
        </div>
      </div>
      <div className="img-paperinside-container">
        <img src={paperInsider.img} className="img-header" alt="headerImage" />
      </div>
      <div className="paper-paragraph-container">
        <p>{paperInsider.paragraph}</p>
      </div>
      <div className="more-papers">
        <h1>المزيد من ملخصات والأوراق المعرفية</h1>
        <hr />
        <div className="more-papers-cards">
              {data.slice(0,6).map((item,index)=>(
                  <MediumCard item={item} key={index} type="first" />
              ))}
        </div>
      </div>
    </div>
  );
};

export default PaperInside;
