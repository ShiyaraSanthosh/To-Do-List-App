
import React, { useState } from "react";
import todo_icon from "../assets/image/todo_icon.png";
import TodoList from "./TodoList";

const Home = () => {
  
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(""); 
  {/*step1 */}
  const addTask = () => {
    if (newTask.trim() === "") return;

    const updatedTasks = [
      ...tasks,
      { text: newTask, completed: false }, 
    ];

    setTasks(updatedTasks); 
    setNewTask(""); 
  };

  {/*step2 */}
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  {/*step3 */}
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex min-h-screen justify-center">
      <div className="bg-white place-self-center w-5/6 max-w-md p-6 rounded-lg shadow-lg min-h-[550px]">
        {/* --- Title --- */}
        <div className="flex flex-block gap-2 mb-4">
          <img className="w-9" src={todo_icon} alt="icon" />
          <h1 className="text-red-600 text-2xl">To-Do List</h1>
        </div>

        
        <div className="flex gap-2 mb-6">
          <input
            className="border border-gray-400 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} 
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Add
          </button>
        </div>

        
        <TodoList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default Home;
