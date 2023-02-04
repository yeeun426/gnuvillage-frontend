import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

import TabIntro from "./TabStudyIntro";
import TabResult from "./TabStudyResult";

const StudyIntroStyle = styled.div``;

const StudyIntroPage = styled.div`
  position: relative;
  margin: 30px 80px;
`;

const StudyTitle4 = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding: 20px 0;
`;

const PageIndex = styled.div`
  font-size: 12px;
  text-align: left;
  font-family: "Pretendard-Thin";
`;

const BACKEND_URL = "http://114.206.145.160:3000";
let groupId;

async function onMount(setStudyState) {
  let newStudyState = {};

  await axios.get(BACKEND_URL + "/groups/" + groupId).then((res) => {
    if (res.data !== undefined) {
      let groupProfile;
      let mainActivity;
      let activityStyle;
      let curriculum;
      let result;
      let completionRate;
      try {
        let description = JSON.parse(res.data.description);
        groupProfile = description.groupProfile;
        mainActivity = description.mainActivity;
        activityStyle = description.activityStyle;
        curriculum = description.curriculum;
        result = description.result;
        completionRate = description.completionRate;
      } catch (e) {
        groupProfile = res.data.description;
      }
      newStudyState = {
        studyName: res.data.name,
        groupProfile: groupProfile,
        mainActivity: mainActivity,
        activityStyle: activityStyle,
        curriculum: curriculum,
        result: result,
        completionRate: completionRate,
      };
    }
  });

  setStudyState(newStudyState);
}

function TabContent(props) {
  if (props.index === 0) {
    // return <div>스터디 소개 (주요 활동 내용, 커리큘럼, 진행방식 etc.)</div>;
    return (
      <TabIntro
        mainActivity={props.studyState.mainActivity}
        activityStyle={props.studyState.activityStyle}
        curriculum={props.studyState.curriculum}
      ></TabIntro>
    );
  } else if (props.index === 1) {
    return (
      // <div>스터디 성과물 (프로젝트 팀 - 결과물 / 세미나 팀 - 달성도, 후기)</div>
      <TabResult
        result={props.studyState.result}
        completionRate={props.studyState.completionRate}
      ></TabResult>
    );
  }
}

export default function StudyIntro() {
  let [index, setIndex] = useState(0);
  groupId = useParams().groupId;
  const [studyState, setStudyState] = useState({});
  useEffect(() => {
    onMount(setStudyState);
  }, []);

  console.log("name is" + studyState.studyName);

  return (
    <StudyIntroStyle>
      <Navbar />
      <div className="intro-title-img">
        <img
          className="main-img"
          src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
          alt="mainImg"
        />
        <div className="intro-header-title">Study Introduction</div>
      </div>
      <StudyIntroPage>
        <PageIndex>
          <Link to="/study" style={{ textDecoration: "none" }}>
            스터디 목록
          </Link>
          <span>{" > "}</span>
          <Link
            to={"/study-intro/" + groupId}
            style={{ textDecoration: "none" }}
          >
            {studyState.studyName}
          </Link>
        </PageIndex>

        <StudyTitle4>{studyState.studyName}</StudyTitle4>

        <Nav
          className="mt-5 mb-3"
          variant="tabs"
          defaultActiveKey="link-0"
          justify
        >
          <Nav.Item>
            <Nav.Link
              eventKey="link-0"
              onClick={() => {
                setIndex(0);
              }}
            >
              Introduction
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={() => {
                setIndex(1);
              }}
            >
              Result
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent index={index} studyState={studyState} />
      </StudyIntroPage>
    </StudyIntroStyle>
  );
}
