import React from "react";
import { MainStyle } from "../styles/styled";
import Footer from "../components/Footer";
import mainImg from "../assets/images/main-img.jpg";
import { BsArrowRight } from "react-icons/bs";
import Gnuvil from "../assets/images/Gnuvil.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

function Main() {
  console.log(sessionStorage);
  
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
              <SwiperSlide>
                <div className="main-review-items">
                  <div className="main-review-info">
                    <div>2021-2학기</div>
                    <div>JAVA</div>
                  </div>
                  <div className="main-review-txt">후기</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main-review-items">
                  <div className="main-review-info">
                    <div>2021-2학기</div>
                    <div>JAVA</div>
                  </div>
                  <div className="main-review-txt">후기</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main-review-items">
                  <div className="main-review-info">
                    <div>2021-2학기</div>
                    <div>JAVA</div>
                  </div>
                  <div className="main-review-txt">후기</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main-review-items">
                  <div className="main-review-info">
                    <div>2021-2학기</div>
                    <div>JAVA</div>
                  </div>
                  <div className="main-review-txt">후기</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main-review-items">
                  <div className="main-review-info">
                    <div>2021-2학기</div>
                    <div>JAVA</div>
                  </div>
                  <div className="main-review-txt">후기</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main-review-items">
                  <div className="main-review-info">
                    <div>2021-2학기</div>
                    <div>JAVA</div>
                  </div>
                  <div className="main-review-txt">후기</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <Footer />
    </MainStyle>
  );
}

export default Main;
