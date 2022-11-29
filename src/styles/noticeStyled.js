import styled from "styled-components"

export const ReviewStyle = styled.div`
    .intro-title-img{
        position: relative;    
    }

    .intro-title-img img{
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    
    .intro-header-title{
        position: absolute;
        top: 50%;
        font-size: 30px;
        font-weight: bold;
        color: white;
        width: 100%;
    }

    .review-contents {
        padding: 20px 100px;
    }

    .review-container {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: center;
    }
    
    .review-items {
        border : 1px solid #e6e6e6;
        width: 300px;
        border-radius: 4%;
        padding: 19px 19px;
        box-sizing: border-box;
    }

    .review-title {
        font-size: 25px;
        text-align: center;
        padding: 20px 0;
    }

    .img img{
        width: 100%;
        height: 316px;
        border-radius: 4%;
    }

    .img h3, .img h4{
        position: absolute;
        color: white;
        left: 10px;
    }
    .review-items-study{
        top: 20px;
    }
    .review-items-period{
        top:40px;
    }

    .img{
        // background-img: transparent url(https://cdn.visitkorea.or.kr/resources/images/main/img_dim_bg_04.png) no-repeat left bottom;
        position: relative;
    }

    .modal {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 99;
      background-color: rgba(0, 0, 0, 0.6);
    }

    button {
      outline: none;
      cursor: pointer;
      border: 0;
    }

    .review-modal > section {
      width: 90%;
      max-width: 450px;
      margin: 38vh auto;
      border-radius: 0.3rem;
      background-color: #fff;
      /* 팝업이 열릴때 스르륵 열리는 효과 */
      animation: modal-show 0.3s;
      overflow: hidden;
      top: 50px;
    }

    .review-modal-header {
      position: relative;
      padding: 16px 64px 16px 16px;
      background-color: #f1f1f1;
      font-weight: 700;
    }

    .review-modal-header button {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 30px;
      font-size: 21px;
      font-weight: 700;
      text-align: center;
      color: #999;
      background-color: transparent;
    }
    
    .review-modal > section > main {
      padding: 16px;
      border-bottom: 1px solid #dee2e6;
      border-top: 1px solid #dee2e6;
    }
    .review-modal > section > footer {
      padding: 12px 16px;
      text-align: right;
    }
    .review-modal > section > footer button {
      padding: 6px 12px;
      color: #fff;
      background-color: #6c757d;
      border-radius: 5px;
      font-size: 13px;
    }

`

export const WriteReviewStyle = styled.div`
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
    font-size: 30px;
    font-weight: bold;
    color: white;
    width: 100%;
  }

  .writeReview-title {
    font-size: 25px;
    text-align: center;
    padding: 20px 0;
  }

  // 정리 필요
  .write_item{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 75px;
  }
  
  .write_item label {
    color: #293D45;
    width: 60px;
    text-align: left;
    font-size: 17px;
    font-family: 'Pretendard';
  }
  
  .write_item input{
    width: 85%;
    border: 1px solid #cacaca;
    height: 40px;
  }

  .write_item select{
    height: 40px;
  }

  .write_item_txt input {
    height: 300px!important;
  }

  .write_container{
    width: 700px;
    margin: auto;
  }
  
  .write_container span{
    font-family: 'yg-jalnan'
  }
`