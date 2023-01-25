import React from "react";
import { IntroductionStyle } from "../styles/styled";
import Navbar from "../components/Navbar";

export default function Introduction() {
  return (
    <IntroductionStyle>
      <Navbar />
      <div className="intro-title-img">
        <img
          className="main-img"
          src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
          alt="mainImg"
        />
        <div className="intro-header-title">Introduction</div>
      </div>

      <div className="Intro">
        <div className="intro-title">동아리 소개</div>

        <div className="intro-title">
          Come to Gnuvil, Meet SW! 한국외국어대학교 글로벌캠퍼스 소프트웨어 중앙
          동아리
        </div>

        <div className="intro-contents">
          <div className="intro-img">사진</div>
          <div className="intro-txt">
            혼자가 아닌 함께 배가 되는 학습; 다양한 사고와 경험을 공유하고
            생각을 넓혀가요! // 같은 문제더라도 풀이 방법은 사람마다 다양합니다.
            서로의 사고 과정을 공유하며 생각의 폭을 넓혀갈 수 있습니다.
          </div>
        </div>

        <div className="intro-contents">
          <div className="intro-img">사진</div>
          <div className="intro-txt">
            말로 체득하는 지식; 설명할 수 있다는 것은 나에게 체득됐다는 것!
            발표, 토론을 통해 서로 가르쳐주며 성장해요! // 말하기 학습은
            메타인지 능력을 키워줍니다. 말하는 과정에서 자신이 어떤 것을 정확히
            아는지 모르는지 스스로 알게 됩니다. 또한, 설명하는 과정에서
            각인효과로 아는 것은 더욱 명료하게 머릿속에 정리됩니다. 스터디에서
            발표, 토론을 통해 습득한 지식을 말로 표현하면서 효과적으로 학습할 수
            있습니다.
          </div>
        </div>
      </div>
    </IntroductionStyle>
  );
}
