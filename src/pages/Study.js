import React from "react";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StudyBtn from "../components/StudyBtn";

import { IntroductionStyle } from "../styles/styled";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";

import StudyResultItem from "../components/StudyResultItem";

const StudyStyle = styled.div``;

const StudyPage = styled.div`
  position: relative;
  margin: 30px 80px;
`;

const StudyTitle1 = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  padding: 20px 0;
  font-family: "Pretendard";
`;

const StudyTitle2 = styled.div`
  font-size: 20px;
  text-align: left;
  padding: 20px 30px 0;
  font-family: "Pretendard";
`;

const StudyTitle3 = styled.div`
  font-size: 15px;
  text-align: left;
  padding: 0 30px;
  font-family: "Pretendard-Thin";
`;

const StudyButtons = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Study() {
  const navigate = useNavigate();

  const studys1 = [
    { id: 0, name: "C", url: "/study-intro/0" },
    { id: 1, name: "JAVA", url: "/study-intro/1" },
    { id: 2, name: "ALGORITHM", url: "/study-intro/2" },
    { id: 3, name: "DATA SCIENCE", url: "/study-intro/3" },
    { id: 4, name: "WEB basic", url: "/study-intro/4" },
    { id: 5, name: "WEB development", url: "/study-intro/5" },
  ];

  return (
    <StudyStyle>
      <Navbar />

      <IntroductionStyle>
        <div className="intro-title-img">
          <img
            className="main-img"
            src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
            alt="mainImg"
          />
          <div className="intro-header-title">Study</div>
        </div>
      </IntroductionStyle>

      <StudyPage>
        <StudyTitle1>Introduction</StudyTitle1>
        <StudyButtons>
          {studys1.map((study) => {
            return (
              <StudyBtn
                title={study.name}
                key={study.id}
                onClick={() => {
                  navigate(study.url);
                }}
              />
            );
          })}
        </StudyButtons>

        <hr />
        <br />

        <StudyTitle1>Results</StudyTitle1>
        <Swiper spaceBetween={50} slidesPerView={4} navigation loop={true}>
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
      </StudyPage>
    </StudyStyle>
  );
}
