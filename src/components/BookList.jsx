import { Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    bookName: "",
  };

  render() {
    // console.log(this.props.myArr);

    return (
      <Container fluid style={{ marginLeft: "40px" }}>
        <Form
          style={{ textAlign: "left", marginBottom: "20px" }}
          value={this.state.bookName}
          onChange={(event) =>
            this.setState({ bookName: event.target.value.toLowerCase() })
          }
        >
          <Form.Group>
            <Form.Label>Cerca Libro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cerca libro"
              required
              style={{ maxWidth: "400px" }}
            />
          </Form.Group>
        </Form>
        <Row className="g-4">
          {this.props.myArr
            .filter((elem) =>
              elem.title.toLowerCase().includes(this.state.bookName)
            )
            .map((book) => (
              <SingleBook
                myObj={book}
                key={book.asin}
                setIdBook={this.props.setIdBook}
                asin={this.props.asin}
              />
            ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
