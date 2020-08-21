import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the course" },
    { id: "cg2", text: "Learn all about the course' main topic" },
    { id: "cg3", text: "Help other students in the course" },
  ]);

  function addNewGoalHandler(newGoal) {
    setCourseGoals((prevCourseGoals) => {
      return courseGoals.concat(newGoal);
    });
  }

  return (
    <div className="App">
      <h2>Course Goals</h2>
      <NewGoal onAddNewGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
