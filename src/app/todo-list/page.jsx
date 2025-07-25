"use client";

import {TodoProvider} from '@/context/todoContext'
import TodoInput from "@/components/todoComponents/TodoInput";
import TodoList from "@/components/todoComponents/todoList";

export default function Home() {
<<<<<<< HEAD

  return (
=======
   return (
>>>>>>> 73421df66e20ad5514c389b461e0cf566faf4eeb
    <TodoProvider>
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
        <div className="w-full max-w-md space-y-4">
          <h1 className="text-2xl font-bold text-center">My Todo List</h1>
          <TodoInput />
          <TodoList />
<<<<<<< HEAD

=======
>>>>>>> 73421df66e20ad5514c389b461e0cf566faf4eeb
        </div>
      </main>
    </TodoProvider>
  );
}
