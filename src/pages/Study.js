import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StudyBtn from "../components/StudyBtn";

import { IntroductionStyle } from "../styles/styled";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import axios from "axios";

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

const BACKEND_URL = "http://114.206.145.160:3000";

async function onMount(setStudyListState) {
  let newStudyListState = {};

  //스터디 그룹들을 조회
  await axios
    .get(BACKEND_URL + "/groups/", {
      params: { pageSize: 100 },
    })
    .then((res) => {
      newStudyListState = res.data.items;
    });

  setStudyListState(newStudyListState);
}

export default function Study() {
  const navigate = useNavigate();
  const [studyListState, setStudyListState] = useState([]);
  let studyList = [];

  for (let i = 0; i < studyListState.length; i++) {
    studyList.push(
      <StudyBtn
        title={studyListState[i].name}
        key={studyListState[i].id}
        onClick={() => {
          navigate("/study-intro/" + studyListState[i].id);
        }}
      />
    );
  }

  useEffect(() => {
    onMount(setStudyListState);
  }, []);

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
        <StudyButtons>{studyList}</StudyButtons>

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
