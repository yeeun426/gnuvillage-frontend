import React from "react";
import Navbar from "../components/Navbar";
import { BaseStyle } from "../styles/styled";

export default function BasePage(props) {
  return (
    <BaseStyle>
      <Navbar />
      <div className="base-header">
        <img
          className="base-header-img"
          src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
          alt="headerImg"
        />
        <div className="base-header-title"> {props.headerTitle} </div>
      </div>

      <div className="container">
        <div className="base-title">{props.title}</div>
        <div>{props.children}</div>
      </div>
    </BaseStyle>
  );
}
