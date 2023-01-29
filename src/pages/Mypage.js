import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { MypageStyle } from "../styles/mypageStyled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const onLogout = () => {
  sessionStorage.removeItem("id");
  document.location.href = "/";
};

const BACKEND_URL = "http://114.206.145.160:3000";
let userId = "testid1";
let password = "testpw123";
let token;

async function onMount(setStudyState, setProfileState, navigate) {
  let assignments = [];
  let newStudyState = [];
  let newProfileState = {};
  let axioses = [];

  //로그인 과정
  await axios
    .post(BACKEND_URL + "/auth/login", {
      id: userId,
      password: password,
    })
    .then(async (res) => {
      token = res.data;
    });
  console.log(token);

  //그룹 배정 정보 조회
  await axios
    .get(BACKEND_URL + "/groups/a", {
      params: {
        userId: userId,
        pageNo: 1,
      },
    })
    .then((res) => {
      assignments = res.data.items;
    });
  //배정된 그룹 각각의 상세 정보 조회
  for (let i = 0; i < assignments.length; i++) {
    axioses.push(
      axios
        .get(BACKEND_URL + "/groups/" + assignments[i].groupId)
        .then((res) => {
          if (res.data !== undefined) {
            let groupProfile;
            try {
              groupProfile = JSON.parse(res.data.description).groupProfile;
            } catch (e) {
              groupProfile = res.data.description;
            }
            newStudyState.push({
              studyName: res.data.name,
              groupProfile: groupProfile,
              url: "/study-notice/" + res.data.id,
            });
          }
        })
    );
  }
  await axios.all(axioses);

  //state에 반영
  setStudyState(newStudyState);

  //프로필 정보 가져옴
  await axios
    .get(BACKEND_URL + "/users/p/" + userId, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      newProfileState = res.data;
    })
    .catch((err) => {
      if (err.response.data.statusCode === 401) {
        navigate("/login", { replace: true });
      }
    });

  console.log(newProfileState);
  //state에 반영
  setProfileState(newProfileState);
}

async function onMessageSubmit(e) {
  e.preventDefault();
  const newMessage = {
    message: e.target.message.value,
  };

  axios
    .patch(BACKEND_URL + "/users/p/" + userId, newMessage, {
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

async function onProfileSubmit(e) {
  e.preventDefault();
  const newProfile = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    department: e.target.department.value,
  };

  axios
    .patch(BACKEND_URL + "/users/p/" + userId, newProfile, {
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

export default function Mypage() {
  const [studyState, setStudyState] = useState([]);
  const [profileState, setProfileState] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    onMount(setStudyState, setProfileState, navigate);
  }, []);

  //state의 데이터를 토대로 컴포넌트 구성
  const studies = [];
  studyState.forEach((e) => {
    studies.push(
      <div className="col m-1" key={e.url}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{e.studyName}</h5>
            <p className="card-text">{e.groupProfile}</p>
            <a href={e.url} className="btn btn-outline-primary">
              팀 페이지 이동
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <MypageStyle>
      <Navbar />
      <div className="base-header">
        <img
          className="base-header-img"
          src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
          alt="headerImg"
        />
        <div className="base-header-title">Mypage</div>
      </div>
      <div className="container">
        <div className="d-flex flex-md-row flex-column mt-5">
          <div>
            <div
              className="nav flex-md-column flex-row nav-tabs me-md-3 mb-3"
              id="v-tabs"
              role="tablist"
            >
              <button
                className="nav-link text-nowrap col-md-12 col-4 active"
                id="v-tabs-study-tab"
                data-bs-toggle="tab"
                data-bs-target="#tabs-study"
                type="button"
                role="tab"
              >
                <div className="d-md-block d-none">활동 스터디 모음</div>
                <div className="d-md-none d-block">스터디</div>
              </button>
              <button
                className="nav-link text-nowrap col-md-12 col-4"
                id="v-tabs-message-tab"
                data-bs-toggle="tab"
                data-bs-target="#tabs-message"
                type="button"
                role="tab"
              >
                <div className="d-md-block d-none">자기소개 수정</div>
                <div className="d-md-none d-block">자기소개</div>
              </button>
              <button
                className="nav-link text-nowrap col-md-12 col-4"
                id="v-tabs-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#tabs-profile"
                type="button"
                role="tab"
              >
                <div className="d-md-block d-none">개인정보 수정</div>
                <div className="d-md-none d-block">개인정보</div>
              </button>
            </div>
            <div>
              <button className="logout" onClick={onLogout}>
                로그아웃
              </button>
            </div>
          </div>
          <div className="tab-content flex-fill" id="tabs-tabContent">
            <div
              className="tab-pane fade show active flex-row"
              id="tabs-study"
              role="tabpanel"
              tabIndex="0"
            >
              <h4>활동 스터디 모음</h4>
              <hr></hr>
              <div>
                <div className="row m-1">{studies}</div>
              </div>
            </div>
            <div
              className="tab-pane fade flex-row"
              id="tabs-message"
              role="tabpanel"
              tabIndex="0"
            >
              <h4>자기소개 수정</h4>
              <hr></hr>
              <div className="row m-1">
                <form className="row" onSubmit={onMessageSubmit}>
                  <div className="row align-items-center mb-3">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="messageEdit"
                        name="message"
                        placeholder="Leave a comment here"
                        defaultValue={profileState.message}
                        style={{ height: "100px" }}
                        required
                      ></textarea>
                      <label className="ms-3" htmlFor="messageEdit">
                        Message
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md">
                      <button
                        className="btn btn-primary text-nowrap"
                        type="submit"
                      >
                        수정
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="tab-pane fade flex-row"
              id="tabs-profile"
              role="tabpanel"
              tabIndex="0"
            >
              <h4>개인정보 수정</h4>
              <hr></hr>
              <div className="row m-1">
                <form className="row" onSubmit={onProfileSubmit}>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-auto row">
                      <label
                        htmlFor="validationDefault01"
                        className="form-label"
                      >
                        이름(2~40글자)
                      </label>
                    </div>
                    <div className="col-md-auto row">
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        name="name"
                        defaultValue={profileState.name}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-auto row">
                      <label
                        htmlFor="validationDefault02"
                        className="form-label"
                      >
                        이메일
                      </label>
                    </div>
                    <div className="col-md-auto row">
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        name="email"
                        defaultValue={profileState.email}
                        placeholder="example@example.com"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-auto row">
                      <label
                        htmlFor="validationDefault03"
                        className="form-label"
                      >
                        전화번호
                      </label>
                    </div>
                    <div className="col-md-auto row">
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault03"
                        name="phone"
                        defaultValue={profileState.phone}
                        placeholder="010-0000-0000"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-auto row">
                      <label
                        htmlFor="validationDefault04"
                        className="form-label"
                      >
                        학과(학부)
                      </label>
                    </div>
                    <div className="col-md-auto row">
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault04"
                        name="department"
                        defaultValue={profileState.department}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md">
                      <button
                        className="btn btn-primary text-nowrap"
                        type="submit"
                      >
                        수정
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MypageStyle>
  );
}
