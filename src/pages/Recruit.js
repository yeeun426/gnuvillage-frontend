import React from 'react';
import {RecruitStyle} from '../styles/recruitStyled'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Recruit() {
    return(
        <RecruitStyle>
            <Navbar />
            <div className = "intro-title-img">
                <img className = "main-img" src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg" alt = "mainImg" />
                <div className= "intro-header-title">Recruit</div>
            </div>

            <div className="recruit-contents">
                <div className="recruit-title">
                    신입 부원 모집
                </div>

                <div className="recruit-container">
                    <div className="recruit-box">
                        <div className="recruit-box-semester">2022년도 2학기</div>
                        <div className="recruit-box-date">
                            <div className="recruit-box-Dday">D-23</div>
                            <Link to ="/recruit/detail">
                                <div className="recruit-box-contents">
                                    <div>모집 상세페이지 바로 가기</div>
                                    <div>기간 : 2022.XX.XX - 2022.XX.XX</div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="recruit-box">
                        <div className="recruit-box-semester">2022년도 1학기</div>
                        <div className="recruit-box-date">
                            <div className="recruit-box-Dday">모집마감</div>
                            <div className="recruit-box-contents">
                                <div>모집 상세페이지 바로 가기</div>
                                <div>기간 : 2022.XX.XX - 2022.XX.XX</div>
                            </div>
                        </div>
                    </div>

                    <div className="recruit-box">
                        <div className="recruit-box-semester">2021년도 2학기</div>
                        <div className="recruit-box-date">
                            <div className="recruit-box-Dday">모집마감</div>
                            <div className="recruit-box-contents">
                                <div>모집 상세페이지 바로 가기</div>
                                <div>기간 : 2021.XX.XX - 2021.XX.XX</div>
                            </div>
                        </div>
                    </div>

                    <div className="recruit-box">
                        <div className="recruit-box-semester">2021년도 1학기</div>
                        <div className="recruit-box-date">
                            <div className="recruit-box-Dday">모집마감</div>
                            <div className="recruit-box-contents">
                                <div>모집 상세페이지 바로 가기</div>
                                <div>기간 : 2021.XX.XX - 2021.XX.XX</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RecruitStyle>
    )
}