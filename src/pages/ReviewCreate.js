import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { StudyNoticeCreateStyle } from "../styles/studyNoticeCreateStyled";
import axios from "axios";
import PostForm from "../components/PostForm";

const BACKEND_URL = "http://114.206.145.160:3000";
let userId = "superuser";
let password = "testpw123";
let token;

async function onMount(navigate) {
  //로그인 과정
  await axios
    .post(BACKEND_URL + "/auth/login", {
      id: userId,
      password: password,
    })
    .then(async (res) => {
      token = res.data;
    });
}

function onSubmit(e, navigate) {
  e.preventDefault();
  const newPost = {
    title: e.target.title.value,
    content: e.target.content.value,
  };

  axios
    .post(BACKEND_URL + "/posts/", newPost, {
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

export default function ReviewCreate() {
  const navigate = useNavigate();

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
        <div className="base-header-title">Review</div>
      </div>

      <div className="container">
        <div className="base-title">동아리 리뷰 작성</div>
        <PostForm
          onSubmit={(e) => {
            onSubmit(e, navigate);
          }}
        ></PostForm>
      </div>
    </StudyNoticeCreateStyle>
  );
}
