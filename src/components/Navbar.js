import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { NavbarStyle } from "../styles/styled";

function Navbar() {
  return (
    <NavbarStyle>
      <div className="Navbar d-lg-flex d-none">
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
              {/* <div>
                <Link to="/together">Together</Link>
              </div> */}
              <div>
                <Link to="/notice">Notice</Link>
              </div>
              <div>
                <Link to="/recruit">Recruit</Link>
              </div>
              {sessionStorage.getItem("id") === null ? (
                <div className="navbar-my">
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <div>Login</div>
                  </Link>
                </div>
              ) : (
                <div className="navbar-my">
                  <Link to="/mypage" style={{ textDecoration: "none" }}>
                    <div>Mypage</div>
                  </Link>
                </div>
              )}
            </div>

            <div className="navbar-modal">
              <div className="navbar-modal-intro">
                <Link to="/intro" style={{ textDecoration: "none" }}>
                  <div>동아리 소개</div>
                </Link>
                <Link to="/history" style={{ textDecoration: "none" }}>
                  <div>히스토리</div>
                </Link>
                <Link to="/study-results" style={{ textDecoration: "none" }}>
                  <div>활동사진</div>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <div>운영진 연락처</div>
                </Link>
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

              {/* <div className="navbar-modal-together">
                <div>트리맵</div>
                <div>프로젝트 목록</div>
                <div>개인 맞춤</div>
                <div>모집 공고 내기</div>
              </div> */}

              <div className="navbar-modal-intro">
                <Link to="/notice" style={{ textDecoration: "none" }}>
                  <div>공지사항</div>
                </Link>
                <Link to="/review" style={{ textDecoration: "none" }}>
                  <div>동아리후기</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-dark bg-opacity-50 navbar-expand-lg bg-dark fixed-top d-lg-none d-block">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="navbar-logo">
              <Link to="/">
                <img src={logo} alt="logo" style={{ height: "40px" }} />
              </Link>
              <div>GNUVILLAGE</div>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Introduction
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/intro">
                      <div>동아리 소개</div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/history">
                      <div>히스토리</div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <div>활동사진</div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <div>운영진 연락처</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Study
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/study">
                      <div>스터디 소개</div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/study-results">
                      <div>팀 결과물</div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/study-notice">
                      <div>팀 별 공지사항</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Notice
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/study">
                      <div>공지사항</div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/study-results">
                      <div>동아리후기</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Recruit
                </a>
              </li>
              {sessionStorage.getItem("id") === null ? (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/mypage">
                    Mypage
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </NavbarStyle>
  );
}

export default Navbar;
