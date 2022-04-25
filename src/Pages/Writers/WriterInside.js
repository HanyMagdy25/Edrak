import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../constants/Spinner";
// jquery
import $ from "jquery";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";
// import { FacebookShareButton, TwitterShareButton } from "react-share";
import CardPodcast from "../../Cards/CardPodcast";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

const WriterInside = () => {
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
  // const url = window.location.href;

  useEffect(() => {
    fetch(`${baseUrl}/users`,
    {
      credentials: 'include'
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.msg);
        console.log("writers", data);
      });
  }, []);

  const writerInsider = data.find((a) => a._id === _id);
  console.log("writerInsider :", writerInsider);

  if (!writerInsider) {
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="writerInside">
      <div className="writerInside-container">
        <div className="writerInside-content">
          <img src={writerInsider.thumbnail} alt="test" />
          <h2>{writerInsider.name}</h2>
          <div className="social-icons-small-writer">
            <span
              onClick={() => {
                copy();
                copyAlert();
              }}
            >
              <i className="fa-solid fa-share-from-square"></i>
            </span>
            <span>
              <a href={writerInsider.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
              
            </span>
            <span>
              <a href={writerInsider.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </span>
          </div>
        </div>

        <div className="writerInside-articles">
          <hr />
          <div className="writerInside-articles-all">
            <CardPodcast />
            <CardPodcast />
            <CardPodcast />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterInside;
