import React, { useState } from "react";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState(0);
  const [output, setOutput] = useState("");

  const calculateSum = (date) => {
    date = date.replaceAll("-", "");
    let sum = 0;

    for (let i = 0; i < date.length; i++) {
      sum = sum + Number(date.charAt(i));
    }

    sum = sum % number;

    return sum;
  };

  const handleOnClick = (e) => {
    e.preventDefault();

    let sum = calculateSum(date);

    if (sum === 0) {
      setOutput(
        <h2 className="output"> {number} is a lucky number!! 🥳 🥳 🥳 </h2>
      );
    } else {
      setOutput(<h2 className="output"> {number} is not that lucky 😕</h2>);
    }
  };

  return (
    <div>
      <div className="App">
        <nav>Is Your Birthdate is Lucky!!</nav>

        <h3 style={{ paddingBottom: 5 }}> We don't store your DOB!! </h3>

        <form onSubmit={handleOnClick}>
          <div className="container">
            <h2>your birthdate</h2>
            <input
              required
              className="input"
              type="date"
              onChange={(event) => {
                setDate(event.target.value);
              }}
            ></input>

            <h2>your lucky number</h2>
            <input
              className="input"
              type="Number"
              min="1"
              step="1"
              required
              onChange={(event) => {
                setNumber(event.target.value);
              }}
            ></input>

            <br />

            <button className="btn" type="submit">
              Check
            </button>

            <div>{output}</div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
