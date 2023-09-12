import { Component } from "react";

class MyFooter extends Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: "black",
          width: "100%",
          color: "white",
          paddingBlock: "15px",
        }}
      >
        <div>{this.props.text}</div>
      </footer>
    );
  }
}

export default MyFooter;
