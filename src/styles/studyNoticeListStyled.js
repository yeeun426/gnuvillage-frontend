import styled from "styled-components";

export const StudyNoticeListStyle = styled.div`
  .notice-list-header {
    position: relative;
  }

  .notice-list-header img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .notice-list-header-title {
    font-size: 30px;
    font-weight: bold;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .container {
    text-align: left;
  }

  .notice-list-title {
    font-size: 25px;
    font-weight: bold;
    text-align: left;
    padding: 20px 0;
    font-family: "Pretendard";
  }

  .offcanvas-body {
    text-align: left;
  }

  .offcanvas-button {
    text-align: right;
  }
`;
