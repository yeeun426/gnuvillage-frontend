import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { StudyNoticeEditStyle } from "../styles/studyNoticeEditStyled";
import axios from "axios";
import PostForm from "../components/PostForm";

const BACKEND_URL = "http://114.206.145.160:3000";
let userId = "superuser";
let password = "testpw123";
let token;
let postId;

async function onMount(setPostState, navigate) {
  let newPostState = {};

  //로그인 과정
  await axios
    .post(BACKEND_URL + "/auth/login", {
      id: userId,
      password: password,
    })
    .then(async (res) => {
      token = res.data;
    });

  //관리자 아니면 뒤로가기
  if (userId !== "superuser") {
    navigate(-1);
    alert("권한이 없습니다.");
  }

  //포스트 조회
  await axios
    .get(BACKEND_URL + "/posts/" + postId, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      newPostState = res.data;
    })
    .catch((err) => {
      if (err.response.data.statusCode === 404) {
        navigate("/", { replace: true });
        alert("존재하지 않는 글입니다.");
      }
    })
    .catch((err) => {
      if (
        err.response.data.statusCode === 401 ||
        err.response.data.statusCode === 403
      ) {
        navigate("/", { replace: true });
        alert("권한이 없습니다.");
      }
    });

  setPostState(newPostState);
}

function onSubmit(e, navigate) {
  e.preventDefault();
  const newPost = {
    title: e.target.title.value,
    content: e.target.content.value,
  };

  axios
    .patch(BACKEND_URL + "/posts/" + postId, newPost, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      console.log(res.data);
      alert("수정 완료");
      navigate(-1);
    })
    .catch((err) => {
      if (err.response.data.statusCode === 400) {
        alert("입력 내용이 올바른 지 확인해주세요.");
      }
    });
}

export default function NoticeEdit() {
  const navigate = useNavigate();
  const [postState, setPostState] = useState({});
  postId = useParams().postId;

  useEffect(() => {
    onMount(setPostState, navigate);
  }, [navigate]);

  return (
    <StudyNoticeEditStyle>
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
        <div className="base-title">공지 수정</div>
        <div>
          <PostForm
            title={postState.title}
            content={postState.content}
            onSubmit={(e) => {
              onSubmit(e, navigate);
            }}
          ></PostForm>
        </div>
      </div>
    </StudyNoticeEditStyle>
  );
}
