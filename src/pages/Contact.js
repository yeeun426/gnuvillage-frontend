import React from "react";
import { ContactStyle } from "../styles/contactStyled";
import Navbar from "../components/Navbar";
import location from "../assets/images/location.png";

export default function Introduction() {
  return (
    <ContactStyle>
        <Navbar />
        <div className="intro-title-img">
            <img
            className="main-img"
            src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
            alt="mainImg"
            />
            <div className="intro-header-title">Contact</div>
        </div>

        <div className="Contact">
            <div className="intro-title">운영진 연락처</div>
            <img src={location} alt="동아리 위치" />
            <div className="contact-container">
                <div className = "contact-items">
                    <div className = "contact-items-category">∙ address</div>
                    <div>17035 경기도 용인시 처인구 모현읍 외대로 81 한국외국어대학교 학생회관 316호</div>
                </div>

                <div className = "contact-items">
                    <div className = "contact-items-category">∙ 회장</div>
                    <div>정성욱</div>
                </div>

                <div className = "contact-items">
                    <div className = "contact-items-category">∙ Tel</div>
                    <div>010-2265-7605</div>
                </div>

                <div className = "contact-items">
                    <div className = "contact-items-category">∙ instagram</div>
                    <button onClick={() => window.open('https://www.instagram.com/hufs_gnuvil/', '_blank')}>@hufs_gnuvil</button>
                </div>

                <div className = "contact-items">
                    <div className = "contact-items-category">∙ e-mail</div>
                    <div>gnuvil@hufs.ac.kr</div>
                </div>
            </div>
        </div>
    </ContactStyle>
  );
}
