import React from "react";
import { IntroductionStyle } from "../styles/styled";
import Navbar from "../components/Navbar";
import img1 from "../assets/images/inroductionImg1.jpg";
import img2 from "../assets/images/inroductionImg2.jpg";
import img3 from "../assets/images/inroductionImg3.jpg";
import img4 from "../assets/images/inroductionImg4.jpg";

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
        {/* <div className="intro-title">동아리 소개</div> */}

        <div className="intro-title">
          Come to Gnuvil, Meet Computer Science!
          <h5>한국외국어대학교 글로벌캠퍼스 소프트웨어 중앙 동아리</h5>
        </div>

        <div className="intro-contents">
          <div>
            <img
              className="intro-img"
              src={img1}
              alt="img_혼자가 아닌 함께 배가 되는 학습"
            />
          </div>
          <div className="intro-txt">
            <h4>혼자가 아닌 함께 배가 되는 학습</h4>
            <b>다양한 사고와 경험을 공유하고 생각을 넓혀가요!</b>
            <br />
            같은 문제더라도 풀이 방법은 사람마다 다양합니다. 서로의 사고 과정을
            공유하며 생각의 폭을 넓혀갈 수 있습니다.
          </div>
        </div>

        <div className="intro-contents">
          <div>
            <img
              className="intro-img"
              src={img2}
              alt="img_말로 체득하는 지식"
            />
          </div>
          <div className="intro-txt">
            <h4>말로 체득하는 지식</h4>
            <b>발표, 토론을 통해 서로 가르쳐주며 성장해요!</b>
            <br />
            설명할 수 있다는 것은 나에게 체득됐다는 것! 말하기 학습은 메타인지
            능력을 키워줍니다. 말하는 과정에서 자신이 어떤 것을 정확히 아는지
            모르는지 알게 됩니다. 각인효과로, 설명하는 과정에서 아는 것은 더욱
            명료하게 머릿속에 정리됩니다. 습득한 지식을 스터디에서 발표, 토론을
            통해 말로 표현하면서 효과적으로 학습할 수 있습니다.
          </div>
        </div>

        <div className="intro-contents">
          <div>
            <img
              className="intro-img"
              src={img3}
              alt="img_함께 성장하는 커뮤니티 형성"
            />
          </div>
          <div className="intro-txt">
            <h4>함께 성장하는 커뮤니티 형성</h4>
            <b>
              같은 분야를 공부하고 같은 꿈을 키우는 사람들과 교류하고 소통해요!
            </b>
            <br />
            중앙 동아리이기에, 다양한 친구들을 만날 수 있습니다. 더욱이,
            관심사와 목표가 비슷한 친구들을 만날 수 있어 끈끈한 커뮤니티를 만들
            수 있습니다.
          </div>
        </div>

        <div className="intro-contents">
          <div>
            <img
              className="intro-img"
              src={img4}
              alt="img_자유로운 스터디 형성"
            />
          </div>
          <div className="intro-txt">
            <h4>자유로운 스터디 형성</h4>
            <b>
              기초 스터디부터 프로젝트 스터디까지 관심 분야와 수준에 맞는
              스터디를 경험할 수 있어요!
            </b>
            <br />
            C언어, Java, Python, 데이터사이언스, 웹 개발, 앱 개발 등 다양한
            분야와 수준별 분반으로 스터디를 참여할 수 있습니다. 자신의 관심
            분야에 맞는 새로운 스터디 또한 개설할 수 있습니다.
          </div>
        </div>
      </div>
    </IntroductionStyle>
  );
}
