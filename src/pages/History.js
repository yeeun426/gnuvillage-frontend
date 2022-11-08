import React from 'react';
import {HistoryStyle} from '../styles/styled'
import Navbar from '../components/Navbar';

export default function Introduction() {
    return(
        <HistoryStyle>
            <Navbar />
            
            <div className = "intro-title-img">
                <img className = "main-img" src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg" alt = "mainImg" />
                <div className= "intro-header-title">Introduction</div>
            </div>

            <div className = "History">
                <div className = "history-title">
                    히스토리
                </div>

                <div className = "history-container">

                    <div className = "history-items">
                        <div className = "history-dot"></div>
                        <div className = "history-year">
                            2022
                        </div>
                        <div className='history-contents'>
                            내용
                        </div>
                    </div>

                    <div className = "history-items">
                        <div className = "history-dot"></div>
                        <div className = "history-year">
                            2021
                        </div>
                        <div className='history-contents'>
                            내용
                        </div>
                    </div>

                    <div className = "history-items">
                        <div className = "history-dot"></div>
                        <div className = "history-year">
                            2020
                        </div>
                        <div className='history-contents'>
                            내용
                        </div>
                    </div>

                    <div className = "history-items">
                        <div className = "history-dot"></div>
                        <div className = "history-year">
                            2019
                        </div>
                        <div className='history-contents'>
                            내용
                        </div>
                    </div>
                </div>
            </div>
        </HistoryStyle>
    )
}