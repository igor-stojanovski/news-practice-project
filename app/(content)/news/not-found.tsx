import React from "react";

type Props = {};

export default function NewsNotFound({}: Props) {
  return (
    <div id="error">
      <h1>News Not Found!</h1>
      <p>The requested resource could not be found!</p>
    </div>
  );
}
