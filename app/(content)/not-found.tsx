import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div id="error">
      <h1>Not Found!</h1>
      <p>The requested resource could not be found!</p>
    </div>
  );
}
