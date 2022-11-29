import styled from "styled-components"

export const RecruitStyle = styled.div`
    font-family: 'Pretendard';

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
        right: 47vw;        
        font-size: 30px;
        font-weight: bold;
        color: white;
    }

    .recruit-contents{
        padding: 0 330px;
        padding-bottom: 50px;
    }

    .recruit-title{
        font-size: 20px;
        line-height: 2;
    }

    .recruit-box-semester {
        text-align: left;
        padding: 15px 0;   
    }

    .recruit-box-date{
        display: flex;
        gap: 30px;
        place-content: center;
    }

    .recruit-box-Dday {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        line-height: 70px;
        background: #D9D9D9;
    }

    .recruit-box-contents {
        background: #D9D9D9;
        padding: 10px 30px;
        line-height: 1.5;
        width: 700px;
    }

    .recruit-container {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .recruit-apply-Dday{
        display: flex;
        align-items: center;
        gap: 13px;
        margin-top: 15px;
    }

    .recruit-apply-content{
        padding: 0 300px;
    }

    .recruit-apply-box {
        width: 100%;
        background: #D9D9D9;
        height: max-content;
        padding: 20px 50px;
        margin: 30px 0;
        box-sizing: border-box;
    }

    .recruit-apply-title {
        text-align: left;
        font-size: 20px;
    }

    .recruit-apply-question {
        padding: 5px;
        background: #D9D9D9;
    }

    .recruit-apply-list {
        display: flex;
        gap: 10px;
        flex-direction: column;
    }
`
