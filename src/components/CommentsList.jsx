// import { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";

const CommentsList = (props) => {
  // const myArr = [this.props.commentList];
  // console.log("myarr", myArr);
  return (
    <ListGroup
      as="ul"
      style={{
        marginTop: "20px",
        width: "100%",
      }}
    >
      {props.commentList.map((elem) => (
        <ListGroup.Item as="li" key={`commID-${elem._id}`}>
          {elem.comment}
          <Button variant="danger" style={{ marginLeft: "15px" }}>
            Danger
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentsList;
