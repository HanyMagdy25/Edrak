import React, { useEffect, useState } from "react";
import "./TvEdrak.css";
import { useParams } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import Spinner from "../../constants/Spinner";
// jquery
import $ from "jquery";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";
import BigCard from "../../Cards/BigCard";
import ReactPlayer from "react-player";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

const TvInside = () => {
  const [data, setData] = useState([]);
  const [clickTube, setClickTube] = useState(false);
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

  useEffect(() => {
    fetch(`${baseUrl}/videos`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.msg);
        console.log("id", data);
      });
  }, []);

  const tvInsider = data.find((a) => a._id === _id);
  console.log("tvInsider 22 :", tvInsider);

  const handleShare = () => {
    fetch(`${baseUrl}/video_share/${tvInsider._id}`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("share counter :", data);
      });
  };

  if (!tvInsider) {
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="tvinside-inside">
      <div className="tvinside-content">
        <div className="global-simi-btn">{tvInsider.type}</div>
        <h1 className="header-headline">{tvInsider.name}</h1>
        <p className="header-paragragh">{tvInsider.about}</p>
        <div className="both-share-author">
          <div className="about-author-tvinside">
            <h6>{tvInsider.writer}</h6>
            <div className="share-icon">
              <h6>
                <i className="fa-solid fa-share-nodes"></i>{" "}
                {tvInsider.numberOfShare}
              </h6>
            </div>
            <div className="cal">
              <h6>
                <i className="fa-solid fa-calendar-days"></i>{" "}
                {tvInsider.createdOn.substring(0, 10)}
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
      </div>
      <div
        className="img-tvinside-container"
        onClick={() => setClickTube(true)}
      >
        {clickTube ? (
          <div>
            <ReactPlayer
              width="100%"
              height="500px"
              controls
              url={tvInsider.youtube_url}
            />
          </div>
        ) : (
          <>
            <img src={tvInsider.img} className="img-header" alt="headerImage" />
            <span className="paly-vid">
              <i className="fa-solid fa-circle-play"></i>
            </span>{" "}
          </>
        )}
      </div>

      <div className="tv-vids-parent">
        <h1>المزيد من تلفاز إدراك</h1>
        <hr />
        <div className="tv-vids">
          {data.slice(0, 7).map((card, index) => (
            <BigCard key={index} data={card} inArt={true} type="four" path="tv-inside"/>
          ))}
          <div className="tv-dots">....</div>
        </div>
      </div>
    </div>
  );
};

export default TvInside;
