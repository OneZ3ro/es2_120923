import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
// import history from "../data/history.json";
// import horror from "../data/horror.json";
// import romance from "../data/romance.json";
// import scifi from "../data/scifi.json";

const AllTheBooks = () => {
  return (
    <div style={{ paddingInline: "25px" }}>
      <div className="d-flex gap-4 flex-nowrap" style={{ overflowX: "scroll" }}>
        <div className="d-flex flex-column align-items-center">
          <h3 style={{ width: "fit-content", marginBottom: "20px" }}>
            Fantasy
          </h3>
          <Container fluid>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
              {fantasy.map((book, idx) => (
                <Col key={`col-${idx}`}>
                  <Card>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title
                        style={{ maxHeight: "48px", overflow: "hidden" }}
                      >
                        {book.title}
                      </Card.Title>
                      <Card.Text>Questo libro costa: {book.price}</Card.Text>
                      <Button variant="primary">Compra</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AllTheBooks;
