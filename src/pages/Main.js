import React from "react";
import { MainStyle } from "../styles/styled";
import Footer from "../components/Footer";
import mainImg from "../assets/images/main-img.jpg";
import { BsArrowRight } from "react-icons/bs";
import Gnuvil from "../assets/images/Gnuvil.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import gnuvilLogo from "../assets/images/gnuvilLogo.png";

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
            <div>
              <img src={gnuvilLogo} alt="Gnuvil" className="main-intro-img" />
            </div>

            <div className="main-intro-txt">
              <h5>한국외대 글로벌캠퍼스 소프트웨어 중앙 동아리</h5>
              소프트웨어에 대한 다양한 스터디 학습을 경험할 수 있는
              동아리입니다.
              <br />
              C, Java, Python, 데이터사이언스, 웹 개발, 앱 개발 등 다양한 분야와
              수준별 분반의 스터디에 참여할 수 있습니다. 자신의 관심 분야에 맞게
              새로운 스터디를 개설할 수도 있습니다.
              <br />
              <b>
                # 다양한 아이디어 공유 # 말로 체득하는 지식 <br /># 함께
                성장하는 커뮤니티 형성
              </b>
            </div>
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
              <div className="main-history-activity">
                <b>Mar-Jun.</b> 알고리즘, 파이썬, 웹개발, C언어, 빅데이터,
                인공지능 스터디 진행
              </div>
            </div>

            <div className="main-history-items">
              <div>2021</div>
              <div className="main-history-dot"></div>
              <div className="main-history-activity">
                <b>Mar-Dec.</b> 코로나19로 인한 비대면 상황으로 온라인 스터디와
                프로젝트 진행 (C++, 빅데이터, 알고리즘, 인공지능, 자바 스터디)
              </div>
            </div>

            <div className="main-history-items">
              <div>2020</div>
              <div className="main-history-dot"></div>
              <div className="main-history-activity">
                <b>Mar-Dec.</b> 코로나19로 인한 비대면 상황으로 온라인 스터디와
                프로젝트 진행
              </div>
            </div>

            <div className="main-history-items">
              <div>2019</div>
              <div className="main-history-dot"></div>
              <div className="main-history-activity">
                <b>Mar-Jun.</b> 초심자 대상 python 강의 <br />
                <b>Jul-Oct.</b> 자동차 번호판 인식 프로젝트 - 컴퓨터비전 및
                딥러닝 <br />
                <b>Sep-Dec.</b> HUV측 발표한 창업 아이템 구현 및 개발, 제작,
                상업화 <br />
                <b>Nov.</b> 삼성SDS가 개발하고 적용한 최신기술과 구현 노하우를
                Techtonic 2019 행사를 통해 소개...
              </div>
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
