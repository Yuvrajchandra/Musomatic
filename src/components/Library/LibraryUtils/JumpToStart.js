import React, { Fragment } from "react";

export default function JumpToStart(props) {
  return (
    <Fragment>
      <li className={"page-item" + (props.interval === 0 ? " hide-item" : "")}>
        <button className="page-link pagination_nav" onClick={props.onPageJump}>
          1
        </button>
      </li>
      <li className={"page-item" + (props.interval === 0 ? " hide-item" : "")}>
        <button className="page-link pagination_nav">...</button>
      </li>
    </Fragment>
  );
}
