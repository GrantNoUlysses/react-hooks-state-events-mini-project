import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { text: newTask.text, category: newTask.category }]);
  };

  const filteredTasks = filteredCategory === "All" ? tasks : tasks.filter(task => task.category === filteredCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilterChange={handleFilterChange} />
      <NewTaskForm categories={CATEGORIES.filter(cat => cat !== "All")} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
