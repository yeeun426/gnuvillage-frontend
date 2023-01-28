import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import styled from "styled-components";
import { IntroductionStyle } from "../styles/styled";
import StudyResultItem from "../components/StudyResultItem";

const StudyResultsStyle = styled.div``;

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
          <Link to="/study-intro/0" style={{ color: "black" }}>
            <StudyResultItem></StudyResultItem>
          </Link>
          <StudyResultItem></StudyResultItem>
          <StudyResultItem></StudyResultItem>
          <StudyResultItem></StudyResultItem>
          <StudyResultItem></StudyResultItem>
          <StudyResultItem></StudyResultItem>
        </Pos>

        <StudyTitle1>활동 사진</StudyTitle1>
        <Swiper spaceBetween={30} slidesPerView={4} navigation loop={true}>
          <SwiperSlide>
            <StudyResultItem></StudyResultItem>
          </SwiperSlide>
          <SwiperSlide>
            <StudyResultItem></StudyResultItem>
          </SwiperSlide>
          <SwiperSlide>
            <StudyResultItem></StudyResultItem>
          </SwiperSlide>
          <SwiperSlide>
            <StudyResultItem></StudyResultItem>
          </SwiperSlide>
          <SwiperSlide>
            <StudyResultItem></StudyResultItem>
          </SwiperSlide>
          <SwiperSlide>
            <StudyResultItem></StudyResultItem>
          </SwiperSlide>
        </Swiper>
      </StudyResultsPage>
    </StudyResultsStyle>
  );
}
