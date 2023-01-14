import React from "react";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StudyBtn from "../components/StudyBtn";

import { IntroductionStyle } from "../styles/styled";

const StudyNoticeStyle = styled.div``;

const StudyNoticeMain = styled.div`
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

const StudyButtons = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function StudyNotice() {
  const navigate = useNavigate();

  const studys1 = [
    { id: 0, name: "C", url: "/study-notice/0" },
    { id: 1, name: "JAVA", url: "/study-notice/1" },
    { id: 2, name: "ALGORITHM", url: "/study-notice/2" },
    { id: 3, name: "DATA SCIENCE", url: "/study-notice/3" },
    { id: 4, name: "WEB basic", url: "/study-notice/4" },
    { id: 5, name: "WEB development", url: "/study-notice/5" },
  ];

  return (
    <StudyNoticeStyle>
      <Navbar />

      <IntroductionStyle>
        <div className="intro-title-img">
          <img
            className="main-img"
            src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
            alt="mainImg"
          />
          <div className="intro-header-title">Study Notice</div>
        </div>
      </IntroductionStyle>

      <StudyNoticeMain>
        <StudyTitle1>스터디별 공지사항</StudyTitle1>
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
        <br />
      </StudyNoticeMain>
    </StudyNoticeStyle>
  );
}
