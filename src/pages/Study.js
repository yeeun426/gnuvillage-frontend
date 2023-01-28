import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import StudyBtn from "../components/StudyBtn";
import StudyResultItem from "../components/StudyResultItem";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { IntroductionStyle } from "../styles/styled";


const StudyStyle = styled.div`
  .study-act-image {
    display: flex;
  }
  
  .study-title-more {
    border: none;
    border-radius: 30px;
    padding: 5px 30px;
    font-family: 'Pretendard';
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

        <div className = "study-title">
          <StudyTitle1>활동 사진</StudyTitle1>
          <Link to="/study-results"><button className="study-title-more">더보기 +</button></Link>
        </div>
          <div className = "study-act-image">
            <StudyResultItem></StudyResultItem>
            <StudyResultItem></StudyResultItem>
            <StudyResultItem></StudyResultItem>
            <StudyResultItem></StudyResultItem>
            <StudyResultItem></StudyResultItem>
          </div>
      </StudyPage>
    </StudyStyle>
  );
}
