import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StudyNoticeListStyle } from "../styles/studyNoticeListStyled";
import axios from "axios";
import Pagination from "../components/Pagination";

const BACKEND_URL = "http://114.206.145.160:3000";
let userId = "superuser";
let password = "testpw123";
let isAdmin = false;
let pageNo = 1;
let totalPage = 10;

async function onMount(setNoticeState, navigate) {
  let newnoticeState = {};

  //로그인 과정
  await axios.post(BACKEND_URL + "/auth/login", {
    id: userId,
    password: password,
  });

  //유저가 관리자인지 확인
  if (userId === "superuser") {
    isAdmin = true;
  }

  //스터디 공지 리스트 가져옴
  await axios
    .get(BACKEND_URL + "/posts/", {
      params: {
        pageNo: pageNo,
        admin: true,
      },
    })
    .then((res) => {
      newnoticeState.list = res.data.items;
      totalPage = res.data.totalPage;
    })
    .catch((err) => {
      if (err.response.data.statusCode === 401) {
        navigate("/login", { replace: true });
      }
    });

  //state에 반영
  setNoticeState(newnoticeState);
}

export default function Notice() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [noticeState, setNoticeState] = useState({
    list: [],
  });
  const [postState, setPostState] = useState({});
  pageNo = searchParams.get("pageNo");
  if (pageNo === null) pageNo = 1;

  let postEditBtn;
  let postCreateBtn;
  if (isAdmin) {
    postEditBtn = (
      <a
        className="btn btn-secondary mb-2 me-3"
        href={"/notice/edit/" + postState.id}
      >
        수정
      </a>
    );
    postCreateBtn = (
      <a className="btn btn-secondary mb-2" href={"/notice/create/"}>
        작성
      </a>
    );
  }

  useEffect(() => {
    onMount(setNoticeState, navigate);
  }, [navigate]);

  const postList = [];
  for (let i = 0; i < noticeState.list.length; i++) {
    const createdDate = new Date(noticeState.list[i].createdDate);
    const date = createdDate.toLocaleDateString();
    const time = createdDate.toLocaleTimeString();
    postList.push(
      <a
        className="list-group-item list-group-item-action"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          setPostState(noticeState.list[i]);
        }}
        key={i}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
      >
        <div className="d-flex flex-md-row flex-column">
          <div className="flex-grow-1">
            <strong>제목: </strong>
            {noticeState.list[i].title}
          </div>
          <div className="me-3">
            <strong className="text-nowrap">작성자: </strong>
            {noticeState.list[i].userId}
          </div>
          <div className=" text-muted">
            <small className="text-nowrap">{date + " " + time}</small>
          </div>
        </div>
      </a>
    );
  }

  return (
    <StudyNoticeListStyle>
      <Navbar />

      <div className="base-header">
        <img
          className="base-header-img"
          src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
          alt="headerImg"
        />
        <div className="base-header-title">Notice</div>
      </div>

      <div className="container">
        <div className="notice-list-title">공지사항</div>
        <div>
          <div className="list-group">{postList}</div>
        </div>
        <Pagination pageNo={pageNo} totalPage={totalPage}></Pagination>
        {postCreateBtn}
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
      >
        <div className="offcanvas-header">
          <div className="d-flex flex-column flex-fill align-items-start">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
            <h5 className="offcanvas-title mt-3" id="postOffcanvas">
              {postState.title}
            </h5>
            <div>
              <small className="me-2">작성자: {postState.userId}</small>
              <small>
                작성일:{" "}
                {new Date(postState.createdDate).toLocaleDateString() +
                  " " +
                  new Date(postState.createdDate).toLocaleTimeString()}
              </small>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="offcanvas-body">{postState.content}</div>
        <div className="offcanvas-button">{postEditBtn}</div>
      </div>
    </StudyNoticeListStyle>
  );
}
