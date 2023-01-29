import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StudyBtn from "../components/StudyBtn";

import { IntroductionStyle } from "../styles/styled";
import axios from "axios";

const BACKEND_URL = "http://114.206.145.160:3000";

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

async function onMount(setStudyNoticeState) {
  let newStudyNoticeState = {};

  //스터디 그룹들을 조회
  await axios
    .get(BACKEND_URL + "/groups/", {
      params: { pageSize: 100 },
    })
    .then((res) => {
      newStudyNoticeState = res.data.items;
    });

  setStudyNoticeState(newStudyNoticeState);
}

export default function StudyNotice() {
  const navigate = useNavigate();
  const [studyState, setStudyNoticeState] = useState([]);
  let studies = [];

  for (let i = 0; i < studyState.length; i++) {
    studies.push(
      <StudyBtn
        title={studyState[i].name}
        key={studyState[i].id}
        onClick={() => {
          navigate("/study-notice/" + studyState[i].id);
        }}
      />
    );
  }

  useEffect(() => {
    onMount(setStudyNoticeState);
  }, []);

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
        <StudyButtons>{studies}</StudyButtons>
        <br />
      </StudyNoticeMain>
    </StudyNoticeStyle>
  );
}
