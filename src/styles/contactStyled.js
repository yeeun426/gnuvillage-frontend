import styled from "styled-components";

export const ContactStyle = styled.div`
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

    .Contact {
        padding: 20px 80px;

        img {
            width: 750px;
        }
    }

    .intro-title {
        font-size: 25px;
        padding: 20px 0;
        font-family: "Pretendard";
    }

    .contact-items{
        font-family: "Pretendard";
        display: flex;
        width: 780px;
        margin: auto;
        padding: 10px;
        font-size: 18px;

        .contact-items-category {
            width: 150px;
            text-align: left;
            color : #3c86c8;
        }

        button {
            border : none;
            background : none;
        }
    }

    .contact-container{
        padding : 20px 0;
    }
`;
