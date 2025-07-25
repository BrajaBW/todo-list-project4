"use client"

import {useTodos} from '@/context/todoContext'

export default function TodoItem({ todo, index }) {
  const {dispatch} = useTodos()

  return (
    <div className="flex items-center justify-between bg-white rounded p-3 shadow-sm">
      <span
<<<<<<< HEAD
        onClick={() => dispatch({type : "TOGGLE_DONE", payload : todo.id})}
=======
        onClick={() => dispatch({type: "TOGGLE_DONE", payload: todo.id})}
>>>>>>> 73421df66e20ad5514c389b461e0cf566faf4eeb
        className={`px-4 py-2 rounded cursor-pointer ${
          todo.done ? "bg-green-400 text-gray-500 line-through" : "bg-white hover:bg-gray-50"
        }`}
      >
        {`${index}. ${todo.text}`}
      </span>
<<<<<<< HEAD
      <button onClick={() => dispatch({type :"DELETE_TODO",payload : todo.id})} className="ml-3 text-red-400 hover:text-red-700 font-bold">
        &times;
      </button>
    </div>
   
=======
      <button onClick={() => dispatch({type: "DELETE_TODO", payload: todo.id})} className="ml-3 text-red-400 hover:text-red-700 font-bold">
        &times;
      </button>
    </div>
>>>>>>> 73421df66e20ad5514c389b461e0cf566faf4eeb
  );
}
