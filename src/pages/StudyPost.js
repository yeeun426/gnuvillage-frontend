// import React, { useState } from 'react';
// import {StudyStyle} from '../styles/studyStyled'
// import Navbar from '../components/Navbar';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import Table from "react-bootstrap/Table";

// export default function Study() {
//     const [value, onChange] = useState(new Date());
//     const [calendar, setCalendar] = useState(true);

//     return(
//         <StudyStyle>
//             <Navbar />

//             <div className = "intro-title-img">
//                 <img className = "main-img" src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg" alt = "mainImg" />
//                 <div className= "intro-header-title">Study</div>
//             </div>

//             <div className = "Study">
//                 <div className = "study-title">
//                     JAVA
//                 </div>

//                 <div className = "study-contents">
//                     <div className = "study-type">
//                         <button className = "study-type-items">JAVA</button>
//                         <button className = "study-type-items">DATA SCIENCE</button>
//                         <button className = "study-type-items">ALGORITHM</button>
//                         <button className = "study-type-items">C</button>
//                         <button className = "study-type-items">WEB basic</button>
//                         <button className = "study-type-items">WEB development</button>
//                     </div>

//                     <div className = "study-records">
//                         <div className="study-records-kinds">
//                             <button onClick = {() => setCalendar(true)}>캘린더</button>
//                             <button onClick = {() => setCalendar(false)}>회의록</button>
//                         </div>

//                     {calendar ?
//                         <div className="study-calendar">
//                             <Calendar
//                                 onChange = {onChange}
//                                 value = {value}
//                             />
//                             {/* <div className = "study-click-calendar">
//                                 {moment(value).format('YYYY년 MM월 DD일')}
//                             </div> */}
//                         </div>

//                     :    <div className="study-meeting">
//                             <Table striped bordered hover>
//                                 <thead>
//                                     <tr className="study-meeting-title">
//                                         <th>번호</th>
//                                         <th>제목</th>
//                                         <th>작성자</th>
//                                         <th>작성일</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>1</td>
//                                         <td>20220902 java 1팀 학습 내용 정리</td>
//                                         <td>홍길동</td>
//                                         <td>2022-09-02</td>
//                                     </tr>
//                                     <tr>
//                                         <td>2</td>
//                                         <td>20220905 java 1팀 학습 내용 정리</td>
//                                         <td>artistJay</td>
//                                         <td>2022-09-05</td>
//                                     </tr>
//                                     <tr>
//                                         <td>3</td>
//                                         <td>20220909 java 1팀 학습 내용 정리</td>
//                                         <td>artistJay</td>
//                                         <td>2022-09-09</td>
//                                     </tr>
//                                 </tbody>
//                             </Table>
//                         </div>
//                     }
//                     </div>
//                 </div>
//             </div>
//         </StudyStyle>

//     )
// }
