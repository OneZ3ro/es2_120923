// import { Component } from "react";
import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import { ListGroup } from "react-bootstrap";
// import { Spinner } from "react-bootstrap";

const CommentArea = (props) => {
  // state = {
  //   isLoading: true,
  //   comments: [],
  // };

  const [showComments, setShowComments] = useState({
    isLoading: true,
    comments: [],
    reLoading: false,
  });

  // const [isLoading, setIsLoading] = useState(true);
  // const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const URL = "https://striveschool-api.herokuapp.com/api/comments/";
    const method = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjY1MjEwYmNhMDAwMTQ1ODNmZDIiLCJpYXQiOjE2OTQwOTA1NzMsImV4cCI6MTY5NTMwMDE3M30.NaaaXaNcsPbSiqzTPJ0r85gA640OlnKF8HjoHiwRbTc",
      },
    };
    try {
      const response = await fetch(URL, method);

      if (response.ok) {
        const parseComments = await response.json();
        // console.log(parseComments);
        const filterComments = parseComments.filter(
          (comment) => comment.elementId === props.asin
        );
        console.log("filtercomm", filterComments);

        setShowComments({
          isLoading: false,
          comments: filterComments,
          reLoading: false,
        });
        // setIsLoading(false);
        // setComments(filterComments);
        // console.log(parseComments);
        // console.log(this.state.comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // componentDidMount() {
  //   this.fetchComments();
  // }

  // componentDidUpdate = (prevProps) => {
  //   // console.log(prevProps);
  //   // console.log(this.props);

  //   if (prevProps.asin !== this.props.asin) {
  //     this.fetchComments();
  //   }
  // };

  const forReLoad = () => {
    setShowComments({ ...showComments, reLoading: true });
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showComments.reLoading]);

  // console.log(this.state.comments);
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ margin: "0 40px 0 20px", width: "400px" }}
    >
      {/* {console.log(this.state.comments)} */}
      {(showComments.comments === null || showComments.comments.length === 0) &&
        !showComments.isLoading && (
          // <div style={{ marginTop: "20px" }}>
          //   Non ci sono ancora commenti su questo libro
          // </div>

          <ListGroup>
            <ListGroup.Item as="li">
              Non ci sono ancora commenti su questo libro
            </ListGroup.Item>
          </ListGroup>
        )}
      {showComments.comments !== null &&
        showComments.comments.length !== 0 &&
        !showComments.isLoading && (
          <>
            <CommentsList commentList={showComments.comments} />
          </>
        )}
      <AddComment asin={props.asin} forReLoad={forReLoad} />
      {/* <div style={{ margin: "20px 40px 0 20px", minWidth: "200px" }}>
          Al momento non c'è nulla e manca la funzione
        </div> */}
    </div>
  );
};

export default CommentArea;
