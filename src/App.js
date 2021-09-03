import { useState } from "react";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [isLucky, setIsLucky] = useState();

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
      setIsLucky(
        <h2 className="output"> {number} is a lucky number!! 🥳 🥳 🥳 </h2>
      );
    } else {
      setIsLucky(<h2 className="output"> {number} is not that lucky 😕</h2>);
    }
  };

  return (
    <div className="App">
      <nav>Is Your Birthdate is Lucky!!</nav>

      <div className="container">
        <h2>your birthdate</h2>
        <input
          required
          type="date"
          className="input"
          onChange={(e) => {
            var date = e.target.value;
            setDate(date);
          }}
        />

        <h2>your lucky number</h2>
        <input
          required
          type="text"
          className="input"
          onChange={(e) => {
            var date = Number(e.target.value);
            setNumber(date);
          }}
        />

        <br />

        <button className="btn" onClick={handleOnClick}>
          Check
        </button>

        <div>{isLucky}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
