import React from "react";
import styled from "styled-components";

import imgEx from "../assets/images/StudyResultItemImg.jpg";

import Pie from "../components/Pie";

const TabStudyResultStyle = styled.div``;

const StudyTitle2 = styled.div`
  font-size: 20px;
  text-align: left;
  padding: 20px 30px 0;
  font-family: "Pretendard";
`;

const StudyText = styled.div`
  font-size: 15px;
  text-align: left;
  padding: 5px 30px;
  font-family: "Pretendard-Thin";
  white-space: pre-wrap;
  line-height: 1.6;
`;

const ResultImg = styled.img`
  border: 1px solid black;
  width: 450px;
  height: 300px;
  object-fit: contain;
`;

const Pos1 = styled.div`
  display: flex;
  padding: 5px 30px;
  width: 100%;
  justify-content: space-between;
  /* padding-bottom: 70px; */
  align-items: center;
  /* line-height: 1.6; */
`;

export default function TabStudyResult() {
  return (
    <TabStudyResultStyle>
      <StudyTitle2>프로젝트 식</StudyTitle2>
      <StudyText>
        1 상세 내용이 들어갈 자리입니다. 상세 내용이 들어갈 자리입니다. 상세
        내용이 들어갈 자리입니다. 상세 내용이 들어갈 자리입니다. 상세 내용이
        들어갈 자리입니다. 상세 내용이 들어갈 자리입니다. 상세 내용이 들어갈
        자리입니다. 상세 내용이 들어갈 자리입니다.
        <br />
        2 상세 내용이 들어갈 자리입니다.
        <br />3 상세 내용이 들어갈 자리입니다.
      </StudyText>
      <Pos1>
        <ResultImg src={imgEx} alt="사진" />
        <StudyText>
          1 상세 내용이 들어갈 자리입니다. 상세 내용이 들어갈 자리입니다. 상세
          내용이 들어갈 자리입니다. 상세 내용이 들어갈 자리입니다. 상세 내용이
          들어갈 자리입니다. 상세 내용이 들어갈 자리입니다. 상세 내용이 들어갈
          자리입니다. 상세 내용이 들어갈 자리입니다.
          <br />
          2 상세 내용이 들어갈 자리입니다.
          <br />3 상세 내용이 들어갈 자리입니다.
        </StudyText>
      </Pos1>

      <StudyTitle2>세미나 식</StudyTitle2>
      <Pie />
    </TabStudyResultStyle>
  );
}
