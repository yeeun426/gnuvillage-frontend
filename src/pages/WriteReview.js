import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {WriteReviewStyle} from '../styles/noticeStyled'
import Navbar from '../components/Navbar';

export default function Introduction() {

    return(
        <WriteReviewStyle>
            <Navbar />
            
            <div className = "intro-title-img">
                <img className = "main-img" src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg" alt = "mainImg" />
                <div className= "intro-header-title">notice</div>
            </div>

            <div className = "writeReview-title">동아리 후기 작성</div>
            <div style = {{padding:"10px 230px"}}>
                <div className= "write_item">
                    <label htmlFor='cm_title'>제목</label>
                    <input
                    type="text"
                    id="cm_title"
                    name="cm_title"
                    placeholder='제목'
                    // value={cm_title}
                    // onChange={handleInputChange}
                    />
                </div>

                <div className= "write_item">
                    <label htmlFor='cm_type'>스터디</label>
                    <select name="cm_type" id="cm_type">
                        <option value="none">커뮤니티 카테고리를 선택해주세요.</option>
                        <option value="동행">java</option>
                        <option value="질문">알고리즘</option>
                        <option value="자유">데이터사이언스</option>
                        <option value="자유">C</option>
                        <option value="자유">웹개발</option>
                    </select>
                </div>

                <div className= "write_item">
                    <label htmlFor='cm_image'>이미지</label>
                    <input type="file" id="file" accept='image/*' multiple={false} />
                </div>

                <div className= "write_item write_item_txt">
                    <label htmlFor='cm_content'>내용</label>
                    <input className= "content"
                    type="text"
                    id="cm_content"
                    name="cm_content"
                    placeholder='내용'
                    // value={cm_content}
                    // onChange={handleInputChange}
                    />
                </div>

                <input className= "btn_submit" type="submit" value="등록" />        

            </div>

        </WriteReviewStyle>
    )
}