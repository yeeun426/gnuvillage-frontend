import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import StudyBtn from "../components/StudyBtn";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IntroductionStyle } from "../styles/styled";
import "swiper/css"; //basic
import "swiper/css/navigation";
import axios from "axios";

import study1 from "../assets/images/study_image_1.jpg";
import study2 from "../assets/images/study_image_2.jpg";
import study3 from "../assets/images/study_image_12.jpg";
import study5 from "../assets/images/study_image_9.jpg";

const StudyStyle = styled.div`
  .study-act-image {
    display: flex;
    gap: 50px;
  }

  .study-act-image img {
    width: 300px;
  }

  .study-title-more {
    border: none;
    border-radius: 30px;
    padding: 5px 30px;
    font-family: "Pretendard";
    color: white;
    background-color: #73737373;
    font-size: 14px;
  }

  .study-title-more:hover {
    background-color: #263f71;
  }

  .study-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

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

        <div className="study-title">
          <StudyTitle1>활동 사진</StudyTitle1>
          <Link to="/study-results">
            <button className="study-title-more">더보기 +</button>
          </Link>
        </div>
        <div className="study-act-image">
          <img src={study1} alt="study1" />
          <img src={study2} alt="study1" />
          <img src={study3} alt="study1" />
          <img src={study5} alt="study1" />
        </div>
      </StudyPage>
    </StudyStyle>
  );
}
