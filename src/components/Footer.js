import React from 'react';
import {FooterStyle} from "../styles/styled"
import Gnuvil from '../assets/images/Gnuvil.png';

export default function Footer() {
    return (
        <FooterStyle>
            <img src={Gnuvil} alt = "Gnuvil" style={{height: "100px"}}/>
                <div className = "footer-items">
                    <span>글로벌캠퍼스</span> 17035 경기도 용인시 처인구 모현읍 외대로 81 한국외국어대학교 학생회관 316호
                </div>

                <div className = "footer-items">
                    <span>Tel.</span> 010-2265-7605 / <span>e-mail.</span> gnuvil@hufs.ac.kr
                </div>

                <div className='footer-copyright'>
                    Copyright ⓒ Hankuk University of Foreign Studies. All Rights Reserved.
                </div>


        </FooterStyle>
    )
}