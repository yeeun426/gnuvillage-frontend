import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import styled from "styled-components";
import { IntroductionStyle } from "../styles/styled";
import StudyResultItem from "../components/StudyResultItem";

import study1 from "../assets/images/study_image_1.jpg";
import study2 from "../assets/images/study_image_2.jpg";
import study3 from "../assets/images/study_image_12.jpg";
import study5 from "../assets/images/study_image_9.jpg";
import study7 from "../assets/images/study_image_7.jpg";
import study8 from "../assets/images/study_image_8.jpg";

import result1 from "../assets/images/result_웹개발.JPG"
import result2 from "../assets/images/result_데이터.png"
import result3 from "../assets/images/result_java.png"
import result4 from "../assets/images/result_웹.jpg"

const StudyResultsStyle = styled.div`
  .swiper-slide img {
    width: 300px;
  }

  .swiper-button-prev {
    left: 0;
  }
  
  .swiper-button-prev {
    right: 0;
  }
`;

const StudyResultsPage = styled.div`
  position: relative;
  margin: 30px 80px;
`;

const Pos = styled.div`
  padding: 20px 30px;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  flex-flow: row wrap;
  flex-wrap: wrap;
`;

const StudyTitle1 = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  padding: 20px 0;
  font-family: "Pretendard";
`;

export default function StudyResults() {
  return (
    <StudyResultsStyle>
      <Navbar />

      <IntroductionStyle>
        <div className="intro-title-img">
          <img
            className="main-img"
            src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
            alt="mainImg"
          />
          <div className="intro-header-title">Study Results</div>
        </div>
      </IntroductionStyle>

      <StudyResultsPage>
        <Pos>
          {/* <Link to="/study-intro/0" style={{ color: "black" }}>
            <StudyResultItem></StudyResultItem>
          </Link> */}
          <StudyResultItem 
            study={"Web development"}
            image = {result1}>
          </StudyResultItem>
          <StudyResultItem 
            study={"Data science"}
            image = {result2}>
          </StudyResultItem>
          <StudyResultItem
            study={"Algorithms"}
            image = {result3}>
          </StudyResultItem>
          <StudyResultItem
            study={"Web basic"}
            image = {result4}>
          </StudyResultItem>
          {/* <StudyResultItem></StudyResultItem> */}
        </Pos>

        <StudyTitle1>활동 사진</StudyTitle1>
        <Swiper spaceBetween={0} slidesPerView={4} navigation loop={true}>
          <SwiperSlide>
            <img src={study1} alt="study1"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={study2} alt="study1"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={study3} alt="study1"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={study5} alt="study1"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={study7} alt="study1"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={study8} alt="study1"/>
          </SwiperSlide>
        </Swiper>
      </StudyResultsPage>
    </StudyResultsStyle>
  );
}
