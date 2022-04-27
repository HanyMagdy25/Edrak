import React, { useEffect, useState } from "react";
import "./TvEdrak.css";
// import tvImage from "../../assets/tv.png"
import TvConst from "./TvConst";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.css";
import "swiper/modules/pagination/pagination.min.css";
// import SwiperCore, { Pagination } from "swiper";
import BigCard from "../../Cards/BigCard";
import TvLayout from "../Layout/TvLayout";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

const TvEdrak = () => {
  const [data, setData] = useState([]);
  const [seriesNames, setSeriesNames] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/videos`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.msg);
        console.log("39 videos", data);
      });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/serieses`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setData(data);
        console.log("40 serieses from tv: ", data);
        setSeriesNames(
          data.msg.map((e) => {
            return { id: e._id, series: e.name , videos: e.videos };
          })
        );
        console.log("seriesNames from tv: ", seriesNames);
      });
  }, []);

  



  return (
    <div className="tv">
      <div className="tv-container">
        <div className="tv-slider">
          <Swiper
            spaceBetween={60}
            pagination={{
              clickable: true,
            }}
          >
            {data.slice(0, 4).map((slide, index) => (
              <SwiperSlide key={index}>
                <TvConst slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* الاكثر مشاهدة */}
        <div className="most-popular">
          <div className="most-popular-tv-container">
            <h1>الأكثر مشاهدة</h1>
            <hr />
            <div className="most-popular-cards">
              {/*to Stop map method after certain number with slice method */}
              {data.slice(0, 4).map((card, index) => (
                <BigCard key={index} data={card} type="four" path="tv-inside"/>
              ))}
            </div>
          </div>
        </div>

        
        <>
        {seriesNames.map((items,index)=>(
          <TvLayout items={items} key={index} />
        ))}
          
        </>
      </div>
    </div>
  );
};

export default TvEdrak;
