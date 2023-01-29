import React from "react";
import styled from "styled-components";


const ImgEdit = styled.img`
  width: 530px;
  height: 280px;
  object-fit: cover;
  opacity: 0.6;
`;

const StudyResultItemStyle = styled.div`
  width: 530px;
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

  h3 {
    font-family: "Pretendard";
    color: black;
  }
`;

export default function StudyResultItem({study, image, content}) {
  return (
    <StudyResultItemStyle>
      <ResultItemTxt>
        <h3>{study}</h3>
        <p>{content}</p>
      </ResultItemTxt>
      <ResultItemImg>
        <ImgEdit src={image} alt={study}></ImgEdit>
      </ResultItemImg>
    </StudyResultItemStyle>
  );
}
