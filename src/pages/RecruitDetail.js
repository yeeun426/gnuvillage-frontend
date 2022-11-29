import React from 'react';
import {RecruitStyle} from '../styles/recruitStyled'
import Navbar from '../components/Navbar';

export default function RecruitDetail() {
    return(
        <RecruitStyle>
            <Navbar />
            <div className = "intro-title-img">
                <img className = "main-img" src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg" alt = "mainImg" />
                <div className= "intro-header-title">지원하기</div>
            </div>

            <div className = "recruit-apply-content">
                <div className="recruit-apply-Dday">
                    <div className="recruit-box-semester">2022년도 2학기</div>
                    <div className="recruit-box-Dday">D-23</div>
                </div>

                <div className = "recruit-apply-box">
                    모집 내용
                </div>

                <div className = "recruit-apply-FAQ">
                    <div className = "recruit-apply-title">FAQ</div>
                    <div className = "recruit-apply-list">
                        <div className = "recruit-apply-question">
                            질문1
                        </div>
                        <div className = "recruit-apply-question">
                            질문2
                        </div>
                        <div className = "recruit-apply-question">
                            질문3
                        </div>
                        <div className = "recruit-apply-question">
                            질문4
                        </div>
                    </div>
                </div>
            </div>
        </RecruitStyle>
    )
}