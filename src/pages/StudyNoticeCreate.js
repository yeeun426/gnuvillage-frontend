import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { StudyNoticeCreateStyle } from "../styles/studyNoticeCreateStyled";
import axios from "axios";
import PostForm from "../components/PostForm";

const BACKEND_URL = "http://114.206.145.160:3000";
let token;
let groupId;
let sessionStorage = window.sessionStorage;

async function onMount(navigate) {
  if (
    sessionStorage["id"] === undefined ||
    sessionStorage["token"] === undefined
  ) {
    navigate("/login", { replace: true });
    alert("로그인이 필요합니다.");
  } else {
    token = sessionStorage["token"];
  }

  //그룹 정보 조회
  await axios.get(BACKEND_URL + "/groups/" + groupId).catch((err) => {
    if (err.response.data.statusCode === 404) {
      navigate("/", { replace: true });
      alert("존재하지 않는 스터디입니다.");
    }
  });
}

function onSubmit(e, navigate) {
  e.preventDefault();
  const newPost = {
    title: e.target.title.value,
    content: e.target.content.value,
  };

  axios
    .post(BACKEND_URL + "/posts/ga/" + groupId, newPost, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      console.log(res.data);
      alert("작성 완료");
      navigate(-1);
    })
    .catch((err) => {
      if (err.response.data.statusCode === 400) {
        alert("입력 내용이 올바른 지 확인해주세요.");
      }
    });
}

export default function StudyNoticeCreate() {
  const navigate = useNavigate();
  groupId = useParams().groupId;

  useEffect(() => {
    onMount(navigate);
  }, [navigate]);

  return (
    <StudyNoticeCreateStyle>
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
        <div className="base-title">스터디 공지 작성</div>
        <PostForm
          onSubmit={(e) => {
            onSubmit(e, navigate);
          }}
        ></PostForm>
      </div>
    </StudyNoticeCreateStyle>
  );
}
