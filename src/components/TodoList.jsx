import React from 'react';
import tick from '../assets/image/tick.png';
import deleteIcon from '../assets/image/delete.png';
const TodoList = () => {
    return (
        <div className="mt-6 space-y-3">
      <div className="flex items-center justify-between gap-4 p-2 bg-gray-50 rounded-md shadow-sm">
        <div className="flex items-center gap-3">
          <img className="w-5 h-5 cursor-pointer" src={tick} alt="tick icon" />
          <h1 className="text-lg text-gray-800">Coding</h1>
        </div>
        <img
          className="h-5 w-4 cursor-pointer"
          src={deleteIcon}
          alt="delete icon"
        />
      </div>
    </div>
    );
}

export default TodoList;
