import React from 'react';
import {IntroductionStyle} from '../styles/styled'
import Navbar from '../components/Navbar';

export default function Introduction() {
    return(
        <IntroductionStyle>
            <Navbar />
            <div className = "intro-title-img">
                <img className = "main-img" src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg" alt = "mainImg" />
                <div className= "intro-header-title">Introduction</div>
            </div>

            <div className = "Intro">
                <div className = "intro-title">
                    동아리 소개
                </div>

                <div className = "intro-contents">
                    <div className = "intro-img">
                        사진
                    </div>
                    <div className = "intro-txt">
                        정보통신공학은 4차 산업혁명의 핵심기술인 지능정보 기술, 정보보안 기술, 통신·네트워크 기술이 융합된 종합적인 학문입니다. 정보통신공학과에서 제공하는 교과과정을 통해, 하드웨어와 소프트웨어 기술을 망라하여, 지능형시스템을 구축하고, 시스템 및 네트워크에서의 정보 보안을 보장하고, 멀티미디어 정보를 효율적으로 저장, 처리, 이용, 서비스하는 역량을 키우게 됩니다. 정보통신공학과는 한국외국어대학교의 국제화 교육모델에 입각해 ‘ICT+외국어’를 모토로 삼아 ICT와 어학, 외국학, 국제지역학에 관한 지식과 경험을 겸비한 글로벌 ICT 전문가를 양성하고 있습니다. 단순히 ‘콘텐츠’, ‘플랫폼’, ‘네트워크’, ‘디바이스’ 중 한 영역만을 이해하는 것이 아니라, 네 개의 지식영역이 유기적으로 융합된 창의적이고 탐구적인 글로벌 인재 양성에 몰두하는 것입니다.

                    </div>
                </div>

                <div className = "intro-contents">
                    <div className = "intro-img">
                        사진
                    </div>
                    <div className = "intro-txt">
                    우리나라는 초고속인터넷 보급률 및 이용률에서 선두를 유지하는 IT강국입니다. 더불어 새로운 시대를 대비하고자 첨단기술과 관련 산업 간 융복합이 산업계, 연구소, 대학 등지에서 활발히 추진되는 나라이기도 합니다. 이에 본 학과는 ‘정보통신 전문지식을 갖춘 탐구적 지식인’, ‘문제해결 능력과 실무역량을 겸비한 창조적 공학인’, ‘엔지니어는 물론 세계화 인재로서의 소양을 겸비한 글로벌 리더’ 양성에 주력해 나가고 있습니다. 학생들은 소정의 교육과정을 이수한 후 자유롭게 부전공 또는 이중전공을 선택해 통섭적 능력을 강화할 수 있습니다. 또한 외국인 교수의 원어강의, ‘잉글리시 존’을 비롯한 우수 외국어 인프라를 활용함으로써 외국어능력을 겸비한 엔지니어로 성장할 수 있습니다. 이는 우리 정보통신공학과가 타 대학의 경우와 달리 ‘글로벌 감각을 갖춘 ICT 인재 양성’에 한층 유리한 지적 토양을 이루고 있습니다.
                    </div>
                </div>
            </div>
        </IntroductionStyle>
    )
}