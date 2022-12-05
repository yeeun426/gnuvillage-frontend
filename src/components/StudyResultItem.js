import React from "react";
import styled from "styled-components";

import backimg from "../assets/images/StudyResultItemImg.jpg";

const ImgEdit = styled.img`
  width: 210px;
  height: 280px;
  object-fit: cover;
  opacity: 0.3;
`;

const StudyResultItemStyle = styled.div`
  width: 210px;
  height: 280px;
  margin: 10px auto;
  position: relative;
`;

const ResultItemImg = styled.div`
  width: 100%;
  vertical-align: middle;
`;

const ResultItemTxt = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export default function StudyResultItem() {
  return (
    <StudyResultItemStyle>
      <ResultItemTxt>
        <h2>제목</h2>
        <p>프로젝트 내용</p>
      </ResultItemTxt>
      <ResultItemImg>
        <ImgEdit src={backimg} alt="RESULT"></ImgEdit>
      </ResultItemImg>
    </StudyResultItemStyle>
  );
}
