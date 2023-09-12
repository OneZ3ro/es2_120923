import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
// import CommentArea from "./CommentArea";

class SingleBook extends Component {
  // state = {
  //   selectedCard: false,
  //   selectedComments: false,
  //   idSelectedBook: "",
  // };

  render() {
    return (
      <Col xs={12} md={6} lg={4}>
        <Card
          style={
            this.props.asin === this.props.myObj.asin
              ? { border: "3px solid red" }
              : { border: "none" }
          }
        >
          <Card.Img
            variant="top"
            src={this.props.myObj.img}
            onClick={() => {
              // this.setState({ selectedCard: !this.state.selectedCard });
              // console.log(this.props.myObj.asin);
              this.props.setIdBook(this.props.myObj.asin);
            }}
          />
          <Card.Body>
            <Card.Title style={{ maxHeight: "48px", overflow: "hidden" }}>
              {this.props.myObj.title}
            </Card.Title>
            <Card.Text>Questo libro costa: {this.props.myObj.price}</Card.Text>
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
  }
}
export default SingleBook;
