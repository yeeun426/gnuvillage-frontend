import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { NavbarStyle } from "../styles/styled";

function Navbar() {
  return (
    <NavbarStyle>
      <div className="Navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" style={{ height: "40px" }} />
          </Link>
          <div>GNUVILLAGE</div>
        </div>

        <div className="navbar-right-area">
          <div className="navbar-menu">
            <div className="navbar-menu-main">
              <div>
                <Link to="/intro">Introduction</Link>
              </div>
              <div>
                <Link to="/study">Study</Link>
              </div>
              <div>
                <Link to="/together">Together</Link>
              </div>
              <div>
                <Link to="/notice">Notice</Link>
              </div>
              <div>
                <Link to="/recruit">Recruit</Link>
              </div>
            </div>

            <div className="navbar-modal">
              <div className="navbar-modal-intro">
                <Link to="/intro" style={{ textDecoration: "none" }}>
                  <div>동아리 소개</div>
                </Link>
                <Link to="/history" style={{ textDecoration: "none" }}>
                  <div>히스토리</div>
                </Link>
                <div>활동사진</div>
                <div>운영진 연락처</div>
              </div>

              <div className="navbar-modal-study">
                <Link to="/study" style={{ textDecoration: "none" }}>
                  <div>스터디 소개</div>
                </Link>
                <Link to="/study-results" style={{ textDecoration: "none" }}>
                  <div>팀 결과물</div>
                </Link>
                <Link to="/study-notice" style={{ textDecoration: "none" }}>
                  <div>팀 별 공지사항</div>
                </Link>
              </div>

              <div className="navbar-modal-together">
                <div>트리맵</div>
                <div>프로젝트 목록</div>
                <div>개인 맞춤</div>
                <div>모집 공고 내기</div>
              </div>

              <div className="navbar-modal-intro">
                <div>공지사항</div>
                <div>동아리후기</div>
              </div>
            </div>
          </div>

          <div className="navbar-my">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div>Login</div>
            </Link>
          </div>
        </div>
      </div>
    </NavbarStyle>
  );
}

export default Navbar;
