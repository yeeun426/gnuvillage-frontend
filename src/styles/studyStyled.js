import styled from "styled-components"

export const StudyStyle = styled.div`
.Study{
    padding: 0 150px 100px;
}

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
    right: 44%;
    font-size: 30px;
    font-weight: bold;
    color: white;
}

.study-title{
    font-size: 25px;
    text-align: center;
    padding: 20px 0;
}

.study-contents{
    display: flex;
    gap: 50px;
}

.study-type {
    background: #F5F5F5;
    border-radius: 40px;
    padding: 50px 20px;
    display:flex;
    flex-direction: column;
}

.study-records-kinds {
    text-align: left;
    button {
        padding-right: 15px;
        padding-bottom: 10px;
        font-size: 16px;
        font-family: 'Pretendard';
    }
}

.study-type-items{
    background: #D9D9D9;
    margin: 15px 0;
    padding: 10px;
    border-radius: 40px;
    font-family: 'Pretendard';
    font-size: 15px;
    box-shadow: 2px 3px 10px rgb(0 0 0 / 20%);
}

button {
    border: none;
    cursor: pointer;
    background: none;
}

.study-meeting-title{
    background: #F5F5F5;
}

.study-meeting-title :nth-child(3){
    width: 50px;
}
.study-meeting-title :nth-child(2){
    width: 700px;
    height: 40px;
}

.study-meeting-title :nth-child(3){
    width: 90px;
}

.study-meeting-title :nth-child(4){
    width: 110px;
}

.study-meeting tbody tr{
    height: 45px;
}

.react-calendar{
    width: 900px;
    border: none;
    font-size: 21px;
}
`