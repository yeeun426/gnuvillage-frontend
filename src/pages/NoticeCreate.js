import React, { useEffect } from "react";
import BasePage from "../components/BasePage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostForm from "../components/PostForm";

const BACKEND_URL = "http://114.206.145.160:3000";
let userId;
let token;

async function onMount(navigate) {
  if (
    sessionStorage["id"] === undefined ||
    sessionStorage["token"] === undefined
  ) {
    navigate("/login", { replace: true });
    alert("로그인이 필요합니다.");
  } else {
    userId = sessionStorage["id"];
    token = sessionStorage["token"];
  }

  //관리자 아니면 뒤로가기
  if (userId !== "superuser") {
    navigate(-1);
    alert("권한이 없습니다.");
  }
}

function onSubmit(e, navigate) {
  e.preventDefault();
  const newPost = {
    title: e.target.title.value,
    content: e.target.content.value,
  };

  axios
    .post(BACKEND_URL + "/posts/a/", newPost, {
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

export default function NoticeCreate() {
  const navigate = useNavigate();

  useEffect(() => {
    onMount(navigate);
  }, [navigate]);

  return (
    <BasePage headerTitle="Notice" title="공지 작성">
      <PostForm
        onSubmit={(e) => {
          onSubmit(e, navigate);
        }}
      ></PostForm>
    </BasePage>
  );
}
