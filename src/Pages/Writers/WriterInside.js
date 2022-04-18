import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../../constants/Spinner';
// jquery
import $ from "jquery";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";

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
    const url = window.location.href;
  
    useEffect(() => {
      fetch("http://localhost:8000/writers")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
          console.log("writers", data);
        });
    }, []);
  
    const writerInsider = data.find((a) => a._id === _id);
    console.log("tvInsider 22 :", writerInsider);
  
    if (!writerInsider) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }
  return (
    <div>
        {writerInsider.writer}
        waiting
    </div>
  )
}

export default WriterInside