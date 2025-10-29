import React from 'react';
import tick from '../assets/image/tick.png';
import not_tick from '../assets/image/not_tick.png'; 
import deleteIcon from '../assets/image/delete.png';


const TodoList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div className="mt-6 space-y-3">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex items-center justify-between gap-4 p-2 bg-gray-50 rounded-md shadow-sm"
        >
          <div className="flex items-center gap-3">
            
            <img
              onClick={() => toggleComplete(index)}
              className="w-5 h-5 cursor-pointer"
              src={task.completed ? tick : not_tick}
              alt="tick toggle"
            />

            
            <h1
              className={`text-lg transition-all duration-300 ${
                task.completed
                  ? 'line-through text-gray-400'
                  : 'text-gray-800'
              }`}
            >
              {task.text}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            
            <img
              onClick={() => deleteTask(index)}
              className="h-5 w-5 cursor-pointer"
              src={deleteIcon}
              alt="delete icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
