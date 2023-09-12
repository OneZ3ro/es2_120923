import { Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
// import { Component } from "react";
import { useState } from "react";

const BookList = (props) => {
  // state = {
  //   bookName: "",
  // };

  const [bookName, setBookName] = useState("");

  // console.log(this.props.myArr);

  return (
    <Container fluid style={{ marginLeft: "40px" }}>
      <Form
        style={{ textAlign: "left", marginBottom: "20px" }}
        value={bookName}
        onChange={(event) => setBookName(event.target.value.toLowerCase())}
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
        {props.myArr
          .filter((elem) => elem.title.toLowerCase().includes(bookName))
          .map((book) => (
            <SingleBook
              myObj={book}
              key={book.asin}
              setIdBook={props.setIdBook}
              asin={props.asin}
            />
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
