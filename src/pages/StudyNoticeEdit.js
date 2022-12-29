import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { StudyNoticeEditStyle } from "../styles/studyNoticeEditStyled";
import axios from "axios";
import Pagination from "../components/Pagination";
import PostForm from "../components/PostForm";

const BACKEND_URL = "http://203.253.76.182";
let userId = "testid1";
let password = "testpw123";
let token;
let groupId;
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

  //그룹 정보 조회
  await axios
    .get(BACKEND_URL + "/groups/" + groupId)
    .then((res) => {
      newPostState.name = res.data.name;
    })
    .catch((err) => {
      if (err.response.data.statusCode === 404) {
        navigate("/", { replace: true });
        alert("존재하지 않는 스터디입니다.");
      }
    });

  //포스트 조회
  await axios
    .get(BACKEND_URL + "/posts/g/" + groupId + "/" + postId, {
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

function onSubmit(e) {
  e.preventDefault();
  const newPost = {
    title: e.target.title.value,
    content: e.target.content.value,
  };

  axios
    .patch(BACKEND_URL + "/posts/g/" + groupId + "/" + postId, newPost, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      console.log(res.data);
      alert("수정 완료");
    })
    .catch((err) => {
      if (err.response.data.statusCode === 400) {
        alert("입력 내용이 올바른 지 확인해주세요.");
      }
    });
}

export default function StudyNoticeEdit() {
  const navigate = useNavigate();
  const [postState, setPostState] = useState({});
  groupId = useParams().groupId;
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
        <div className="base-header-title">Study notice</div>
      </div>

      <div className="container">
        <div className="base-title">스터디 공지 수정</div>
        <div>
          <PostForm
            title={postState.title}
            content={postState.content}
            onSubmit={onSubmit}
          ></PostForm>
        </div>
      </div>
    </StudyNoticeEditStyle>
  );
}
