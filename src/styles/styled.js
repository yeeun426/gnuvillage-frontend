import styled from "styled-components";

export const NavbarStyle = styled.div`
  .Navbar {
    display: flex;
    justify-content: space-between;
    padding: 0 60px;
    align-items: center;

    transition: 0.5s;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.2);
    height: 70px;

    font-size: 20px;
    font-weight: bold;
  }

  .navbar-modal {
    display: none;
    position: absolute;
    z-index: 1;
    padding: 10px;
    font-family: "Pretendard";
    font-size: 14px;
    line-height: 2;
    background: rgba(0, 0, 0, 0.2);
    color: white;
  }

  .navbar-menu:hover .navbar-modal {
    display: flex !important;
    transition: 5s;
  }

  .navbar-menu-main {
    display: flex;
    height: 60px;
    align-items: center;
  }

  .navbar-modal div,
  .navbar-menu-main div {
    width: 120px;
  }

  .navbar-menu-main div a {
    color: white;
    text-decoration: none;
  }

  .navbar-modal-intro a div {
    color: white;
  }

  .navbar-modal-intro a div:hover {
    color: #cf72f2;
  }

  .navbar-modal-study a div {
    color: white;
  }

  .navbar-modal-study a div:hover {
    color: #cf72f2;
  }

  .navbar-my a div {
    color: white;
  }

  .navbar-my a div:hover {
    color: Turquoise;
    transition: 0.5s;
  }

  .navbar-menu-main div a:hover {
    border-bottom: 1px solid #cf72f2;
    transition: 0.5s;
    color: #cf72f2;
  }

  .navbar-modal div div {
    height: 30px;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
  }

  .navbar-right-area {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .navbar-my {
    margin-left: 30px;
  }
`;

export const MainStyle = styled.div`
  .main-wrapper {
    padding: 0 200px 50px;
    button {
      border: none;
      background: none;
      cursor: pointer;
    }
  }

  .main-visual-slogan {
    color: #fff;
    text-align: center;
    padding: 60px 85px;
    background: url("https://ice.hufs.ac.kr/sites/ice/images/main/slogan_bg01.png")
        no-repeat left top,
      url("https://ice.hufs.ac.kr/sites/ice/images/main/slogan_bg02.png")
        no-repeat left bottom;
    background-size: contain;
    position: absolute;
    width: 30%;
    top: 43%;
    left: 50%;
    font-family: "Pretendard";
    line-height: 1.3;
    transform: translate(-50%, -50%);

    .main-slogan-sub {
      font-size: 25px;
    }

    .main-slogan-name {
      font-size: 40px;

      span {
        color: #02e7fc;
      }
    }
  }

  .main-title-img {
    height: 600px;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(../images/bg.jpg);
    background-position: center;
    background-size: cover;
    width: 100%;

    background-color: #5382e3;
    // width: 100%;
    // height: 370px;
    // position: relative;

    .main-img {
      width: 100%;
      object-fit: cover;
      height: 100%;
      opacity: 50%;
    }

    .main-visual-slogan img {
      height: 60px;
    }
  }

  .main-intro-gnuvil,
  .main-history-gnuvil,
  .main-review-gnuvil {
    margin-top: 30px;
  }

  .main-review-info {
    text-align: left;
    font-family: "Pretendard-Thin";
    line-height: 1.5;
  }

  .main-review-txt {
    height: 200px;
    width: 220px;
    background: #e2e1e140;
    border: none;
    box-shadow: 7px 7px 15px lightgrey;
    margin-bottom: 20px;
  }

  .main-review-title {
    padding-top: 10px;
    font-size: 20px;
  }

  .main-container {
    display: flex;
    gap: 55px;
  }

  .main-intro-img {
    width: 290px;
  }

  .main-intro-txt {
    width: 700px;
    text-align: left;
    align-items: center;

    b {
      color : #0b3caf;
    }
  }

  .main-sub-title {
    display: flex;
    text-align: left;
    padding: 15px 0;
    align-items: center;

    svg {
      height: 23px;
      width: auto;
    }

    span {
      font-size: 22px;
      font-family: "Pretendard";
      margin-right: 20px;
    }
  }

  .main-history-gnuvil {
    position: relative;

    .main-history-container {
      padding: 0 30px;
      display: flex;
      gap: 30px;
    }

    .test {
      position: absolute;
      top: 25%;
      background-color: gray;
      width: 100%;
      height: 1px;
    }

    .main-history-dot {
      z-index: 1;
      background-color: #d1d0d0;
      border-radius: 50%;
      width: 10px;
      height: 10px;
    }

    .main-history-activity {
      background-color: whitesmoke;
      font-family: "Pretendard-Thin";
      /* width: 220px; */
      width: 180px;
      height: 280px;
      padding: 10px;
    }

    .main-history-items {
      display: flex;
      font-family: "Pretendard";
      font-size: 14px;
      text-align: left;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const FooterStyle = styled.div`
  padding: 20px 60px;
  background-color: #062f5cc2;
  color: #ffffff;
  font-weight: 400;
  font-family: Pretendard-Thin;
  line-height: 25px;

  .footer-copyright {
    color: #b3b5b2;
    font-size: 13px;
  }

  span {
    color: #b4d2bb;
  }
`;

export const IntroductionStyle = styled.div`
  .Intro {
    padding: 20px 80px;
  }

  .intro-title-img {
    position: relative;
  }

  .intro-title-img img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .intro-header-title {
    position: absolute;
    top: 50%;
    right: 44%;
    font-size: 30px;
    font-weight: bold;
    color: white;
  }

  .intro-title {
    font-size: 35px;
    text-align: center;
    padding: 20px 0;
    height: 150px;
    font-weight: bold;
  }

  .intro-contents {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 70px;
    align-items: center;
    line-height: 1.6;
  }

  .intro-img {
    width: 450px;
    height: 300px;
    padding: 10px;
  }

  .intro-txt {
    h4 {
      font-weight: bold;
    }
    width: 65%;
    text-align: left;
    padding: 20px;
  }
`;

export const HistoryStyle = styled.div`
  .History {
    padding: 20px 80px;
  }

  .intro-title-img {
    position: relative;
  }

  .intro-title-img img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .intro-header-title {
    position: absolute;
    top: 50%;
    right: 44%;
    font-size: 30px;
    font-weight: bold;
    color: white;
  }

  .history-title {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    padding: 20px 0;
  }

  .history-container {
    height: 100%;
    position: relative;
  }

  .history-dot.first::before {
    content: "";
    position: absolute;
    top: 0;
    left: 45%;
    width: 2px;
    height: 1900px;
    background: #ccd1d9;
  }

  .history-items {
    display: flex;
    gap: 30px;
    justify-content: center;
    padding: 20px 0;

    .history-year {
      font-size: 25px;
    }

    .history-contents {
      width: 70%;
      text-align: left;
      padding: 10px;
      background: whitesmoke;
      line-height: 1.8;
    }

    .history-dot {
      width: 16px;
      height: 16px;
      background: lightgray;
      margin-top: 10px;
      border-radius: 50%;
      position: relative;
    }
  }
`;

export const BaseStyle = styled.div`
  .base-header {
    position: relative;
  }

  .base-header img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .base-header-title {
    font-size: 30px;
    font-weight: bold;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .base-title {
    font-size: 25px;
    font-weight: bold;
    text-align: left;
    padding: 20px 0;
    font-family: "Pretendard";
  }

  .container {
    text-align: left;
  }

`;
