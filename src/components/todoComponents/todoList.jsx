"use client"

import {useTodos} from '@/context/todoContext'
import TodoItem from '@/components/todoComponents/todoItem'
import { useMemo,useCallback } from 'react';

export default function TodoList() {
  const { state,dispatch} = useTodos();

  const handleDone = useCallback((id) => {
 dispatch({type : "TOGGLE_DONE", payload :id});
  },[dispatch])

  const handleDelete = useCallback((id)=>{
dispatch({type :"DELETE_TODO",payload : id});
  },[dispatch])

  const hasTodos = state.todos.length > 0;
  const isLanguageIndonesian = false
  const doneCont = useMemo(()=>{
  return state.todos.filter((todo)=>todo.done).length
},[state.todos])

  if (state.loading){
    return <p className='text-center text-blue-300 font-medium'>Loading ..... Sedang Mengambil data</p>
  }

  if (!hasTodos) {
    return <p className="text-center text-gray-500">Task kosong, silahkan buat Task baru.</p>;
  }

  return (
    <ul className="space-y-2">
      <p>{doneCont} done task complate</p>
      {state.todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index + 1} onDone={handleDone} onDelete={handleDelete} />
      ))}
      
    </ul>
  );
}
