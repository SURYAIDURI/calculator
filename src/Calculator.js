import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [searchBarValue, setSearchBarValue] = useState("0");

  const handleButtonClick = (value) => {
    if (searchBarValue === "0" && value !== ".") {
      setSearchBarValue(value);
    } else {
      setSearchBarValue((prevValue) => prevValue + value);
    }

    setExpression((prevExpression) => prevExpression + value);
  };

  const evaluateExpression = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
      setSearchBarValue(result.toString());
    } catch (error) {
      setExpression("Error");
      setSearchBarValue("Error");
    }
  };

  return (
    <div className="bg-container">
      <div className="calculator">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            value={searchBarValue}
            readOnly
          />
        </div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("/")}>÷</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("*")}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("0")}>0</button>
            <button onClick={() => handleButtonClick(".")}>.</button>
            <button onClick={() => handleButtonClick("+")}>+</button>
            <button onClick={() => evaluateExpression()}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

