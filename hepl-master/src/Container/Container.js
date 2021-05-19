import React from "react";
import Header from "../Components/Header/Header";

function Container(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default Container;
