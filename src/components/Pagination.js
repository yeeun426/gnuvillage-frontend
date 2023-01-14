import React from "react";

export default function Pagination({ pageNo, totalPage }) {
  let items = [];
  let startPageNo, endPageNo;

  pageNo = Number(pageNo);
  totalPage = Number(totalPage);

  if (pageNo - 2 > 0) startPageNo = pageNo - 2;
  else startPageNo = 1;
  if (pageNo + 2 < totalPage) endPageNo = pageNo + 2;
  else endPageNo = totalPage;

  if (startPageNo === 1)
    items.push(
      <li className="page-item disabled" key={startPageNo - 1}>
        <a className="page-link" href={"?pageNo=" + (startPageNo - 1)}>
          <span>&laquo;</span>
        </a>
      </li>
    );
  else
    items.push(
      <li className="page-item" key={startPageNo - 1}>
        <a className="page-link" href={"?pageNo=" + (startPageNo - 1)}>
          <span>&laquo;</span>
        </a>
      </li>
    );

  for (let i = startPageNo; i <= endPageNo; i++) {
    if (i === pageNo)
      items.push(
        <li className="page-item active" key={i}>
          <a className="page-link" href={"?pageNo=" + i}>
            {i}
          </a>
        </li>
      );
    else
      items.push(
        <li className="page-item" key={i}>
          <a className="page-link" href={"?pageNo=" + i}>
            {i}
          </a>
        </li>
      );
  }

  if (endPageNo === totalPage)
    items.push(
      <li className="page-item disabled" key={endPageNo + 1}>
        <a className="page-link" href={"?pageNo=" + (endPageNo + 1)}>
          <span>&raquo;</span>
        </a>
      </li>
    );
  else
    items.push(
      <li className="page-item" key={endPageNo + 1}>
        <a className="page-link" href={"?pageNo=" + (endPageNo + 1)}>
          <span>&raquo;</span>
        </a>
      </li>
    );

  return (
    <nav className="m-4">
      <ul className="pagination justify-content-center">{items}</ul>
    </nav>
  );
}
