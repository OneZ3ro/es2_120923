// import { Component } from "react";

const MyFooter = (props) => {
  return (
    <footer
      style={{
        backgroundColor: "black",
        width: "100%",
        color: "white",
        paddingBlock: "15px",
      }}
    >
      <div>{props.text}</div>
    </footer>
  );
};

export default MyFooter;
