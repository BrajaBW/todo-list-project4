"use client"

export default function TodoItem({ todo, index ,onDone, onDelete}) {

  return (
    <div className="flex items-center justify-between bg-white rounded p-3 shadow-sm">
      <span
        onClick={() => onDone(todo.id)}
        className={`px-4 py-2 rounded cursor-pointer ${
          todo.done ? "bg-green-400 text-gray-500 line-through" : "bg-white hover:bg-gray-50"
        }`}
      >
        {`${index}. ${todo.text}`}
      </span>
      <button onClick={() => onDelete(todo.id)} className="ml-3 text-red-400 hover:text-red-700 font-bold">
        &times;
      </button>
    </div>
   
  );
}