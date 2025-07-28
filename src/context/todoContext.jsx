"use client"

import {useReducer, useEffect, createContext, useContext} from 'react'
import {initialState, todoReducer} from '@/context/todoReducer'

const TodoContext = createContext()

export const TodoProvider = ({children}) => {
	const [state, dispatch] = useReducer(todoReducer, initialState)

	//eefect saat mounting
	useEffect(() => {
    const savedData = localStorage.getItem("todos");
    if (savedData) dispatch({type: "SET_TODOS", payload: JSON.parse(savedData)});
		dispatch({type: "SET_LOADING", payload: false})
  }, []);

	//effect saat update todos
	const lakukanUpdate = () => {
    console.log("Todos is updated");
    localStorage.setItem("todos", JSON.stringify(state.todos));
  };
  useEffect(lakukanUpdate, [state.todos]);

	return (
		<TodoContext.Provider value={{state, dispatch}}>
			{children}
		</TodoContext.Provider>
	)
}

export const useTodos = () => useContext(TodoContext)