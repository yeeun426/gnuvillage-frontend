import styled from "styled-components";

export const MypageStyle = styled.div`
  .tab-content {
    text-align: start;
  }
  .card {
    max-width: 200px;
  }
  .nav-link {
    color: black;
  }

  .nav-active {
    color: grey;
  }

  .mypage-header {
    position: relative;
  }

  .mypage-header img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .mypage-header-title {
    font-size: 30px;
    font-weight: bold;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
