import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.css";
import "swiper/modules/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import "./Header.css";
import Card from "../Cards/Card";
import Authors from "../Cards/Authors";
import BigCard from "../Cards/BigCard";
import CardPodcast from "../Cards/CardPodcast";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncEdrak, getAllEdrak } from "../Redux/EdrakSlice";
import HeaderSlider from "./HeaderSlider";
import Spinner from "../constants/Spinner";
import TvLayout from "../Pages/Layout/TvLayout";

const baseUrl = "https://depax-blog-backend.herokuapp.com";

SwiperCore.use([Pagination]);

const Header = () => {
  const [data, setData] = useState([]);
  let dispatch = useDispatch();
  const edraks = useSelector(getAllEdrak);

  const [edrakAuthors, setEdrakAuthors] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/users?role=Author`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEdrakAuthors(data.msg);
        console.log("edrakAuthors", data);
      });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/videos`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.msg);
        console.log("55", data);
      });
  }, []);
  useEffect(() => {
    dispatch(fetchAsyncEdrak());
  }, [dispatch]);

  console.log("58 edraks :" ,edraks)

  if (!edraks.length > 0) {
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-right">
          <Swiper
            spaceBetween={60}
            pagination={{
              clickable: true,
            }}
          >
            {edraks.slice(0, 5).map((slide, index) => (
              <SwiperSlide key={index}>
                <HeaderSlider slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="header-left">
          <div className="header-left-container">
            <h2>الجديد فى الموقع</h2>
            <hr />
            <div className="cards">
              {edraks.slice(0, 3).map((item, index) => (
                <Card item={item} key={index} />
              ))}
            </div>

            <h2 style={{ marginTop: "20px" }}>كُتاب إدراك</h2>
            <hr />
            <div className="edrak-authors">
              {edrakAuthors.slice(0, 4).map((author, index) => (
                <Authors author={author} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* الاكثر مشاهدة */}
      {/* our data come from db.json*/}
      <div className="most-popular">
        <div className="most-popular-container">
          <h1>الأكثر مشاهدة</h1>
          <hr />
          <div className="most-popular-cards">
            {/*to Stop map method after certain number with slice method */}
            {edraks.slice(0, 4).map((card, index) => (
              <BigCard key={index} data={card} type="four" path="article-inside" />
            ))}
          </div>
        </div>
      </div>
      {/* البودكاست */}
      <div className="podcast">
        <div className="podcast-container">
          <h1>البودكاست</h1>
          <hr />

          <div className="podcast-cards">
            {edraks.slice(0, 3).map((item, index) => (
              <CardPodcast key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* تلفزيون إدراك */}
      <div className="tv-edrak-in-header">
        <TvLayout title={"تلفاز ادراك"} items={data} />
      </div>
    </div>
  );
};

export default Header;
