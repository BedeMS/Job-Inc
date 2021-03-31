import React from "react";

function PostedDate(props) {
  const today = new Date().toLocaleDateString();
  return <p>{today}</p>;
}

export default PostedDate;
