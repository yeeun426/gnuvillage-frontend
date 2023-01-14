import React from "react";

export default function PostForm({ onSubmit, title, content }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="row align-items-center mb-3">
        <div className="form-floating">
          <input
            className="form-control mb-3"
            id="titleText"
            name="title"
            defaultValue={title}
            required
          ></input>
          <label className="ms-3" htmlFor="titleText">
            제목
          </label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="contentEdit"
            name="content"
            defaultValue={content}
            style={{ minHeight: "300px" }}
            required
          ></textarea>
          <label className="ms-3" htmlFor="contentEdit">
            본문
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <button className="btn btn-secondary text-nowrap" type="submit">
            제출
          </button>
        </div>
      </div>
    </form>
  );
}
