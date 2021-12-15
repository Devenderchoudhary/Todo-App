import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsInputValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isInputValid ? "" : "invalid"}`}>
        <label style={{ color: isInputValid ? "black" : "red" }}>Task</label>
        <input
          style={{
            borderColor: isInputValid ? "black" : "red",
            background: !isInputValid ? "salmon" : "transparent",
          }}
          value={enteredValue}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add ToDo</Button>
    </form>
  );
};

export default CourseInput;
