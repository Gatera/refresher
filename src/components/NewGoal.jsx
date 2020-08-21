import React, { useState } from "react";

function NewGoal(props) {
  const [enteredText, setEnteredText] = useState("");

  function submitGoalHandler(event) {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    props.onAddNewGoal(newGoal);

    setEnteredText("");
  }

  function textChangeHandler(event) {
    setEnteredText(event.target.value);
  }

  return (
    <form className="new-goal" onSubmit={submitGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default NewGoal;
