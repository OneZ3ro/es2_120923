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

  const [comment, setComment] = useState({
    comment: "",
    rate: "",
    elementId: "",
  });

  const handleChange = (propertyName, propertyValue) => {
    setComment({
      ...comment,
      [propertyName]: propertyValue,
      elementId: props.asin,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setComment({ ...comment, elementId: props.asin });
    console.log(comment);
    const URL = "https://striveschool-api.herokuapp.com/api/comments/";
    const method = {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjY1MjEwYmNhMDAwMTQ1ODNmZDIiLCJpYXQiOjE2OTQwOTA1NzMsImV4cCI6MTY5NTMwMDE3M30.NaaaXaNcsPbSiqzTPJ0r85gA640OlnKF8HjoHiwRbTc",
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(URL, method);
      console.log(response);
      if (response.ok) {
        alert("Commento inviato!");
        setComment({
          comment: "",
          rate: "",
          elementId: props.asin,
        });
        props.forReLoad();
      } else {
        console.log("error");
        alert("something went wrong");
      }
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
          value={comment.comment}
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
          value={comment.rate}
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
