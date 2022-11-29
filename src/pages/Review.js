import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {ReviewStyle} from '../styles/noticeStyled'
import Navbar from '../components/Navbar';

export default function Introduction() {
    const [modal, setModal] = useState(false);

    const onClickReview = () => {
        setModal(true);
    }

    return(
        <ReviewStyle>
            <Navbar />
            
            <div className = "intro-title-img">
                <img className = "main-img" src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg" alt = "mainImg" />
                <div className= "intro-header-title">notice</div>
            </div>

            <div className = "review-contents">
                <div className = "review-title">동아리 후기</div>
                <Link to = "/review/write"><button>write</button></Link>

                <div className = "review-container">
                    <div className = "review-items" onClick={onClickReview}>
                        <div className = "img">
                            <h3 className = "review-items-title">
                                동아리 1제목
                            </h3>
                            <h4 className = "review-items-study">JAVA</h4>
                            <h4 className = "review-items-period">활동기간</h4>
                            <div className = "review-items-img">
                                <img src = "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=d52a6f27-5669-4a8b-be08-fb4ef4a7866b" alt=""/>
                            </div>
                        </div>
                    </div>

                    
                    {modal ? (
                    <div className = "modal">
                        <div className = "review-modal">
                            <section>
                                <div className="review-modal-header">
                                    헤더
                                    <button onClick = {() => setModal(false)}>✖</button>
                                </div>
                                <main>내용</main>
                                <footer>
                                    <button onClick = {() => setModal(false)}>✖</button>
                                </footer>
                            </section>
                        </div>
                    </div>
                    ) : null}

                    <div className = "review-items" onClick={onClickReview}>
                        <div className = "img">
                            <h3 className = "review-items-title">
                                동아리 1제목
                            </h3>
                            <h4 className = "review-items-study">JAVA</h4>
                            <h4 className = "review-items-period">활동기간</h4>
                            <div className = "review-items-img">
                                <img src = "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=d52a6f27-5669-4a8b-be08-fb4ef4a7866b" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className = "review-items" onClick={onClickReview}>
                        <div className = "img">
                            <h3 className = "review-items-title">
                                동아리 1제목
                            </h3>
                            <h4 className = "review-items-study">JAVA</h4>
                            <h4 className = "review-items-period">활동기간</h4>
                            <div className = "review-items-img">
                                <img src = "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=d52a6f27-5669-4a8b-be08-fb4ef4a7866b" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className = "review-items" onClick={onClickReview}>
                        <div className = "img">
                            <h3 className = "review-items-title">
                                동아리 1제목
                            </h3>
                            <h4 className = "review-items-study">JAVA</h4>
                            <h4 className = "review-items-period">활동기간</h4>
                            <div className = "review-items-img">
                                <img src = "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=d52a6f27-5669-4a8b-be08-fb4ef4a7866b" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className = "review-items" onClick={onClickReview}>
                        <div className = "img">
                            <h3 className = "review-items-title">
                                동아리 1제목
                            </h3>
                            <h4 className = "review-items-study">JAVA</h4>
                            <h4 className = "review-items-period">활동기간</h4>
                            <div className = "review-items-img">
                                <img src = "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=d52a6f27-5669-4a8b-be08-fb4ef4a7866b" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className = "review-items" onClick={onClickReview}>
                        <div className = "img">
                            <h3 className = "review-items-title">
                                동아리 1제목
                            </h3>
                            <h4 className = "review-items-study">JAVA</h4>
                            <h4 className = "review-items-period">활동기간</h4>
                            <div className = "review-items-img">
                                <img src = "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=d52a6f27-5669-4a8b-be08-fb4ef4a7866b" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ReviewStyle>
    )
}