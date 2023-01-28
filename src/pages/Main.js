import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainStyle } from "../styles/styled";
import Footer from "../components/Footer";
import mainImg from "../assets/images/main-img.jpg";
import { BsArrowRight } from "react-icons/bs";
import Gnuvil from "../assets/images/Gnuvil.png";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";

const BACKEND_URL = "http://114.206.145.160:3000";

SwiperCore.use([Navigation]);

async function onMount(setReviewState, navigate) {
  let newReviewState = {};

  //스터디 공지 리스트 가져옴
  await axios
    .get(BACKEND_URL + "/posts/", {
      params: {
        pageNo: 1,
        admin: false,
      },
    })
    .then((res) => {
      newReviewState.list = res.data.items;
    });

  //state에 반영
  setReviewState(newReviewState);
}

function Main() {
  console.log(sessionStorage);
  const navigate = useNavigate();
  const [reviewState, setReviewState] = useState({
    list: [],
  });
  const reviewSlideList = [];

  useEffect(() => {
    onMount(setReviewState, navigate);
  }, [navigate]);

  for (let i = 0; i < reviewState.list.length; i++) {
    const createdDate = new Date(reviewState.list[i].createdDate);
    const date = createdDate.toLocaleDateString();
    const time = createdDate.toLocaleTimeString();
    reviewSlideList.push(
      <SwiperSlide key={i}>
        <div className="main-review-items">
          <div className="main-review-info">
            <div>{date + " " + time}</div>
            <div>작성자: {reviewState.list[i].userId}</div>
          </div>
          <div className="main-review-txt">
            <strong>제목: {reviewState.list[i].title}</strong>
            <div>{reviewState.list[i].content}</div>
          </div>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <MainStyle>
      <Navbar />

      <div className="main-title-img">
        <img className="main-img" src={mainImg} alt="mainImg" />
        <div className="main-visual-slogan">
          <img src={Gnuvil} alt="Gnuvil" />
          <div className="main-slogan-name">
            그누빌<span>(Gnuvil)</span>
          </div>
          <div className="main-slogan-sub">소프트웨어 중앙동아리</div>
        </div>
      </div>

      <div className="main-wrapper">
        <div className="main-intro-gnuvil">
          <div className="main-sub-title">
            <span>Gnuvil은?</span>
            <Link to="/intro">
              <button>
                <BsArrowRight />
              </button>
            </Link>
          </div>

          <div className="main-container">
            <div className="main-intro-img">그누빌에서 우리는..</div>

            <div className="main-intro-txt"></div>
          </div>
        </div>

        <div className="main-history-gnuvil">
          <div className="main-sub-title">
            <span>History</span>
            <Link to="/history">
              <button>
                <BsArrowRight />
              </button>
            </Link>
          </div>

          <div className="test"></div>

          <div className="main-history-container">
            <div className="main-history-items">
              <div>2022</div>
              <div className="main-history-dot"></div>
              <div className="main-history-activity">연도별 활동</div>
            </div>

            <div className="main-history-items">
              <div>2021</div>
              <div className="main-history-dot"></div>
              <div className="main-history-activity">연도별 활동</div>
            </div>

            <div className="main-history-items">
              <div>2020</div>
              <div className="main-history-dot"></div>
              <div className="main-history-activity">연도별 활동</div>
            </div>

            <div className="main-history-items">
              <div>2019</div>
              <div className="main-history-dot"></div>
              <div className="main-history-activity">연도별 활동</div>
            </div>
          </div>
        </div>

        <div className="main-review-gnuvil">
          <div className="main-sub-title">
            <span>동아리 후기</span>
            <Link to="/review">
              <button>
                <BsArrowRight />
              </button>
            </Link>
          </div>

          <div className="main-review-container">
            <Swiper spaceBetween={50} slidesPerView={4} navigation>
              {reviewSlideList}
            </Swiper>
          </div>
        </div>
      </div>

      <Footer />
    </MainStyle>
  );
}

export default Main;
