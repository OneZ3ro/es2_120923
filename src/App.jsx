// import { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
// import SingleBook from "./components/SingleBook";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import { useState } from "react";

const App = () => {
  // state = {
  //   idBookClicked: "",
  //   selectedCard: false,
  // };

  // const [selectedCard, setSelectedCard] = useState(false);

  // const handleSelectedCard = () => {
  //   setSelectedCard(!selectedCard);
  // };

  const [idBookClicked, setIdBookClicked] = useState("");

  const setIdBook = (value) => {
    setIdBookClicked(value);
  };

  // let myArrFantasy = [];
  // for (let i = 0; i < 10; i++) {
  //   myArrFantasy.push(fantasy[i]);
  // }
  console.log("idBookClicked", idBookClicked);
  return (
    <div className="App">
      <header>
        <MyNav logo={logo} />
      </header>
      <main className="main-height">
        <Welcome />
        {/* <AllTheBooks /> */}
        {/* <SingleBook myObj={fantasy[0]} /> */}
        <h3 style={{ marginBottom: "20px" }}>Fantasy</h3>
        <div className="d-flex">
          <BookList
            myArr={fantasy}
            setIdBook={setIdBook}
            // handleSelectedCard={handleSelectedCard}
            asin={idBookClicked}
          />
          <CommentArea asin={idBookClicked} />
        </div>
      </main>

      <MyFooter text="Il mio footer" />
    </div>
  );
};

export default App;
