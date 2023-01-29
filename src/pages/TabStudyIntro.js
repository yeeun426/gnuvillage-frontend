import React from "react";
import styled from "styled-components";

const TabStudyIntroStyle = styled.div``;

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

export default function TabStudyIntro(props) {
  return (
    <TabStudyIntroStyle>
      <StudyTitle2>주요 활동 내용</StudyTitle2>
      <StudyText>
        {props.mainActivity}
        {/* 1 상세 내용이 들어갈 자리입니다. 상세 내용이 들어갈 자리입니다. 상세
        내용이 들어갈 자리입니다. 상세 내용이 들어갈 자리입니다. 상세 내용이
        들어갈 자리입니다. 상세 내용이 들어갈 자리입니다. 상세 내용이 들어갈
        자리입니다. 상세 내용이 들어갈 자리입니다.
        <br />
        2 상세 내용이 들어갈 자리입니다.
        <br />
        3 상세 내용이 들어갈 자리입니다.
        <br />
        4 상세 내용이 들어갈 자리입니다.
        <br />
        5 상세 내용이 들어갈 자리입니다.
        <br />
        6 상세 내용이 들어갈 자리입니다.
        <br />
        7 상세 내용이 들어갈 자리입니다.
        <br />
        8 상세 내용이 들어갈 자리입니다.
        <br />
        9 상세 내용이 들어갈 자리입니다.
        <br />
        10 상세 내용이 들어갈 자리입니다. */}
      </StudyText>

      <StudyTitle2>진행방식</StudyTitle2>
      <StudyText>
        {props.activityStyle}
        {/* 1 상세 내용이 들어갈 자리입니다.
        <br />
        2 상세 내용이 들어갈 자리입니다.
        <br />
        3 상세 내용이 들어갈 자리입니다.
        <br />
        4 상세 내용이 들어갈 자리입니다.
        <br />
        5 상세 내용이 들어갈 자리입니다.
        <br />
        6 상세 내용이 들어갈 자리입니다.
        <br />
        7 상세 내용이 들어갈 자리입니다.
        <br />
        8 상세 내용이 들어갈 자리입니다.
        <br />
        9 상세 내용이 들어갈 자리입니다.
        <br />
        10 상세 내용이 들어갈 자리입니다. */}
      </StudyText>

      <StudyTitle2>커리큘럼</StudyTitle2>
      <StudyText>
        {props.curriculum}
        {/* 1 상세 내용이 들어갈 자리입니다.
        <br />
        2 상세 내용이 들어갈 자리입니다.
        <br />
        3 상세 내용이 들어갈 자리입니다.
        <br />
        4 상세 내용이 들어갈 자리입니다.
        <br />
        5 상세 내용이 들어갈 자리입니다.
        <br />
        6 상세 내용이 들어갈 자리입니다.
        <br />
        7 상세 내용이 들어갈 자리입니다.
        <br />
        8 상세 내용이 들어갈 자리입니다.
        <br />
        9 상세 내용이 들어갈 자리입니다.
        <br />
        10 상세 내용이 들어갈 자리입니다. */}
      </StudyText>
    </TabStudyIntroStyle>
  );
}
