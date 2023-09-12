// import { Component } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  // state = {
  //   userComment: {
  //     comment: "",
  //     rate: "",
  //     elementId: this.props.asin,
  //   },
  // };

  const [userComment, setUserComment] = useState({
    comment: "",
    rate: "",
    elementId: props.asin,
  });

  const handleChange = (propertyName, propertyValue) => {
    setUserComment({ ...userComment, [propertyName]: propertyValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userComment);
    const URL = "https://striveschool-api.herokuapp.com/api/comments/";
    const method = {
      method: "POST",
      body: JSON.stringify(userComment),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjY1MjEwYmNhMDAwMTQ1ODNmZDIiLCJpYXQiOjE2OTQwOTA1NzMsImV4cCI6MTY5NTMwMDE3M30.NaaaXaNcsPbSiqzTPJ0r85gA640OlnKF8HjoHiwRbTc",
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(URL, method);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      style={{
        textAlign: "left",
        marginTop: "20px",
        width: "100%",
      }}
      onSubmit={handleSubmit}
    >
      {/* {console.log("add", this.props.asin)} */}
      <h5>Dacci la tua opinione</h5>
      <Form.Group>
        <Form.Label>Aggiungi commento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Scrivi il tuo commento"
          required
          // value={this.state.userComment.comment}
          onChange={(event) => handleChange("comment", event.target.value)}
        />
      </Form.Group>
      <Form.Group style={{ marginTop: "8px" }}>
        <Form.Label>Quanto ti è piaciuto?</Form.Label>
        <Form.Control
          type="number"
          placeholder="Voto 1-5"
          min={1}
          max={5}
          required
          // value={this.state.userComment.rate}
          onChange={(event) => handleChange("rate", event.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="secondary" style={{ marginTop: "8px" }}>
        Invia
      </Button>
    </Form>
  );
};

export default AddComment;
