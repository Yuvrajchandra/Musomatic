import React, { Fragment } from "react";

export default function JumpToEnd(props) {
  return (
    <Fragment>
      <li
        className={
          "page-item" +
          (props.interval === Math.floor((props.numberOfPages - 1) / 4) ? " hide-item" : "")
        }
      >
        <button className="page-link pagination_nav">...</button>
      </li>
      <li
        className={
          "page-item" +
          (props.interval === Math.floor((props.numberOfPages - 1) / 4) ? " hide-item" : "")
        }
      >
        <button className="page-link pagination_nav" onClick={props.onPageJump}>
          {props.numberOfPages}
        </button>
      </li>
    </Fragment>
  );
}
