"use client"

import {useTodos} from '@/context/todoContext'
import TodoItem from '@/components/todoComponents/todoItem'

export default function TodoList() {
  const { state } = useTodos();

  const hasTodos = state.todos.length > 0;
  const isLanguageIndonesian = false
  if (state.loading){
    return <p className='text-center text-blue-300 font-medium'>Loading ..... Sedang Mengambil data</p>
  }

  if (!hasTodos) {
    return <p className="text-center text-gray-500">Task kosong, silahkan buat Task baru.</p>;
  }

  return (
    <ul className="space-y-2">
      {state.todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index + 1} />
      ))}
    </ul>
  );
}
