"use client";

import {  
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";


const TodoContext = createContext();

const intialState = {
  todos: [],
  input: "",
  loading : true
};

function todoReducer(state, action) {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, todos: action.payload };

    case "SET_INPUT":
      return { ...state, input: action.payload };

    case "ADD_TODO":
      if (!state.input.trim()) return state;
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), text: state.input, done: false },
        ],
        input: "",
      };
    case "TOGGLE_DONE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: true } : todo
        ),
      };
    case "TODO_DELETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

	  
	  case "SET_LOADING":
	  return {
		...state, loading :action.payload
	  }

    default:
      return state
  }
}

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer,intialState);
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

  //eefect saat mounting
  useEffect(() => {
    const savedData = localStorage.getItem("todos");
    if (savedData) dispatch({type : "SET_TODOS", payload: JSON.parse(savedData)});
	dispatch({type: "SET_LOADING",payload :false})
  }, []);

  //effect saat update todos
  const lakukanUpdate = () => {
    console.log("Todos is updated");
    localStorage.setItem("todos", JSON.stringify(state.todos));
  };
  useEffect(lakukanUpdate, [state.todos]);

  return (
    <TodoContext.Provider
      value={{ state,dispatch}}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
