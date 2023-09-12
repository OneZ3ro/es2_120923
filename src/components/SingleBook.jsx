// import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
// import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  // state = {
  //   selectedCard: false,
  //   selectedComments: false,
  //   idSelectedBook: "",
  // };

  return (
    <Col xs={12} md={6} lg={4}>
      <Card
        style={
          props.asin === props.myObj.asin
            ? { border: "3px solid red" }
            : { border: "none" }
        }
      >
        <Card.Img
          variant="top"
          src={props.myObj.img}
          onClick={() => {
            // this.setState({ selectedCard: !this.state.selectedCard });
            // console.log(this.props.myObj.asin);
            props.setIdBook(props.myObj.asin);
          }}
        />
        <Card.Body>
          <Card.Title style={{ maxHeight: "48px", overflow: "hidden" }}>
            {props.myObj.title}
          </Card.Title>
          <Card.Text>Questo libro costa: {props.myObj.price}</Card.Text>
          <div className="d-flex justify-content-around">
            {/* <Button
                variant="success"
                onClick={() => {
                  this.setState({
                    selectedComments: !this.state.selectedComments,
                    idSelectedBook: this.props.myObj.asin,
                  });
                }}
              >
                Vedi Commenti
              </Button> */}
            <Button variant="primary">Compra</Button>
          </div>
          {/* <div>
              {this.state.selectedComments ? (
                <CommentArea idBook={this.state.idSelectedBook} />
              ) : (
                ""
              )}
            </div> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
