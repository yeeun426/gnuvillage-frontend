import React from "react";
import { HistoryStyle } from "../styles/styled";
import Navbar from "../components/Navbar";

export default function History() {
  return (
    <HistoryStyle>
      <Navbar />

      <div className="intro-title-img">
        <img
          className="main-img"
          src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
          alt="mainImg"
        />
        <div className="intro-header-title">Introduction</div>
      </div>

      <div className="History">
        <div className="history-title">History</div>

        <div className="history-container">
          <div className="history-items">
            <div className="history-dot first"></div>
            <div className="history-year">2022</div>
            <div className="history-contents">
              <b>Mar-Jun.</b> 알고리즘, 파이썬, 웹개발, C언어, 빅데이터,
              인공지능 스터디 진행
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2021</div>
            <div className="history-contents">
              <b>Mar-Dec.</b> 코로나19로 인한 비대면 상황으로 온라인 스터디와
              프로젝트 진행 (C++, 빅데이터, 알고리즘, 인공지능, 자바 스터디)
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2020</div>
            <div className="history-contents">
              <b>Mar-Dec.</b> 코로나19로 인한 비대면 상황으로 온라인 스터디와
              프로젝트 진행
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2019</div>
            <div className="history-contents">
              <b>Mar-Jun.</b> 초심자 대상 python 강의 <br />
              <b>Jul-Oct.</b> 자동차 번호판 인식 프로젝트 - 컴퓨터비전 및 딥러닝{" "}
              <br />
              <b>Sep-Dec.</b> HUV측 발표한 창업 아이템 구현 및 개발, 제작,
              상업화 <br />
              <b>Nov.</b> 삼성SDS가 개발하고 적용한 최신기술과 구현 노하우를
              Techtonic 2019 행사를 통해 소개. 본 행사에서 발표한 AI/Analytics,
              Quantum Computing, Blockchain, IoT, Security, Cloud, SW Eng.
              전문가들의 생생한 개발 경험과 교훈을 확인. 행사 견학
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2018</div>
            <div className="history-contents">
              <b>Mar-May.</b> 각 개발 분야에 맞는 공모전과 대회를 준비하고 출전
              알고리즘 이론 및 실습 스터디 진행 <br />
              <b>May.</b> 코딩배틀 대회 연습 및 출전 <br />
              <b>Sep.</b> Python 언어를 이용해 개발자 코딩배틀 대회 진행 <br />
              <b>Sep-Nov.</b> 1학기에 진행한 Python 언어세미나를 통해 배운
              내용으로 프로젝트 진행
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2017</div>
            <div className="history-contents">
              <b>Aug-Dec.</b> 모현중학교 대상 아두이노, 코딩 교육 봉사
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2016</div>
            <div className="history-contents">
              <b>Aug-Dec.</b> 왕산초등학교, 역부초등학교 학생들을 대상으로 한
              아두이노 코딩 교육 봉사
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2013</div>
            <div className="history-contents">
              <b>May.</b> 대학연합 리눅스유저그룹 연합 세미나 참여 <br />
              <b>Oct.</b> Daum 주관 코엑스에서 열린 DevOn 행사에서 작품 전시{" "}
              <br />
              <b>Nov.</b> 대학연합 리눅스유저그룹 연합세미나 참여 (MASM을 주제로
              세미나 참여)
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2012</div>
            <div className="history-contents">
              <b>Aug.</b> 임베디드 소프트웨어 경진대회 참가 <br />
              <b>Oct.</b> Daum 주관 코엑스에서 열린 DevOn 행사에서 작품 발표{" "}
              <br />
              <b>Nov.</b> 대학연합 리눅스유저그룹 연합 세미나
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2008</div>
            <div className="history-contents">
              <b>May.</b> 대학연합 리눅스유저그룹 연합 세미나 참여 (Drupal tool
              소개 및 주요기능 활용 발표) <br />
              <b>May-Nov.</b> 그누빌 회원 및 공대생을 대상으로 컴퓨터네트워크
              프로그래밍 세미나 <br />
              <b>Nov.</b> 대학연합 리눅스유저그룹 연합세미나 참여 (CakePHP
              웹개발 프레임워크를 소개 및 활용 발표) <br />
              <b>Dec.</b> 그누빌 회원 및 공대생을 대상으로 TCP/IP 프로토콜 설계
              세미나
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2007</div>
            <div className="history-contents">
              <b>Nov.</b> 대학연합 리눅스유저그룹 연합 세미나 참관
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2006</div>
            <div className="history-contents">
              <b>Apr-Sep.</b> 그누빌 회원을 대상으로 한 이더넷 네트워크 세미나{" "}
              <br />
              대학연합 리눅스유저그룹 가입 및 활동 시작
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2005</div>
            <div className="history-contents">
              <b>Mar-May.</b> Cisco networks CCNA 자격증 획득을 위한 스터디
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2003</div>
            <div className="history-contents">
              <b>Aug.</b> 한국 임베디드 코리아 참관 <br />
              <b>Oct-Dec.</b> 공과대학학회 컴파일러와 함께 회원 및 공대생을
              대상으로 리눅스 세미나
            </div>
          </div>

          <div className="history-items">
            <div className="history-dot"></div>
            <div className="history-year">2002</div>
            <div className="history-contents">
              <b>May-Jun.</b> 그누빌 회원 및 공대생을 대상으로 한 리눅스 세미나{" "}
              <br />
              <b>Nov.</b> 한국 GNU 세미나 참가
            </div>
          </div>
        </div>
      </div>
    </HistoryStyle>
  );
}
