import React from "react";
import { Spinner } from "react-bootstrap";


import Logo from "../../imagens/logo.png";

function Loading() {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only"></span>
    </Spinner>
  );
}

export default Loading;
