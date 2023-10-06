// import { useState } from 'react'
// import './App.css'
// import {useDispatch, useSelector} from "react-redux"
// import { addtodo } from './redux/features/todo/todoSlice'
// function App() {
// const todos = useSelector((item)=>item.todos)
// const dispatch = useDispatch()
// const [input,setInput] = useState("")
// const addTodoHandler = (e)=>{
//   // e.preventDefault()
//   dispatch(addtodo(input))
//   setInput("")
// }
//   return (
//     <>
//       <h1>Hello Redux Toolkit</h1>
//      <form onSubmit={addTodoHandler}>
//      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
//      <button type='button' >Add todo</button>
//      </form>
//       {todos?.map((item)=>{
//         return(
//           <div key={item.id}>
//           <p>{item.text}</p>
//           </div>
//         )
//       })}
//     </>
//   )
// }

// export default App

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, delTodo } from "./redux/features/todo/todoSlice";
function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addtodo(input));
    setInput("");
  };

  return (
    <>
      <h1>Hello Redux Toolkit</h1>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={!input}>
          Add todo
        </button>
      </form>
      {todos?.map((item) => {
        return (
          <div key={item.id}>
            <p>
              {item.text}{" "}
              <button onClick={() => dispatch(delTodo(item.id))}>Delete</button>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default App;
