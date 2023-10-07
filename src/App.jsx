// // import { useState } from 'react'
// // import './App.css'
// // import {useDispatch, useSelector} from "react-redux"
// // import { addtodo } from './redux/features/todo/todoSlice'
// // function App() {
// // const todos = useSelector((item)=>item.todos)
// // const dispatch = useDispatch()
// // const [input,setInput] = useState("")
// // const addTodoHandler = (e)=>{
// //   // e.preventDefault()
// //   dispatch(addtodo(input))
// //   setInput("")
// // }
// //   return (
// //     <>
// //       <h1>Hello Redux Toolkit</h1>
// //      <form onSubmit={addTodoHandler}>
// //      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
// //      <button type='button' >Add todo</button>
// //      </form>
// //       {todos?.map((item)=>{
// //         return(
// //           <div key={item.id}>
// //           <p>{item.text}</p>
// //           </div>
// //         )
// //       })}
// //     </>
// //   )
// // }

// // export default App

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addtodo, delTodo, editTodo } from "./redux/features/todo/todoSlice";
// function App() {
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();
//   const [input, setInput] = useState("");

//   const addTodoHandler = (e) => {
//     e.preventDefault();
//     dispatch(addtodo(input));
//     setInput("");
//   };

//   const editT = (id) => {
//     dispatch(
//       editTodo({
//         id,
//         newText: input,
//       })
//     );
//     setInput("");
//   };

//   return (
//     <>
//       <h1>Hello Redux Toolkit</h1>
//       <form onSubmit={addTodoHandler}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button type="submit" disabled={!input}>
//           Add todo
//         </button>
//       </form>
//       {todos?.map((item) => {
//         return (
//           <div key={item.id}>
//             <p>
//               {item.text}{" "}
//               <button onClick={() => dispatch(delTodo(item.id))}>Delete</button>
//               <button onClick={() => editT(item.id)}>edit</button>
//             </p>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default App;



import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, delTodo, editTodo } from "./redux/features/todo/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [editText, setEditText] = useState(""); // New state for editing text
  const [editingTodoId, setEditingTodoId] = useState(null); // Track the todo ID being edited

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addtodo(input));
    setInput("");
  };

  const startEditing = (id, text) => {
    setEditingTodoId(id); // Set the ID of the todo being edited
    setEditText(text); // Set the input field with the current text
  };

  const cancelEditing = () => {
    setEditingTodoId(null); // Clear the editing mode
    setEditText(""); // Clear the input field
  };

  const saveEditedTodo = (id) => {
    dispatch(editTodo({ id:editingTodoId, newText: editText }));
    setEditingTodoId(null); // Clear the editing mode
    setEditText(""); // Clear the input field
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
      {todos.map((item) => {
        {/* setEditingTodoId(null) */}
        return (
          <div key={item.id}>
            {editingTodoId === item.id ? (
              <p>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEditedTodo(item.id)}>Save</button>
                <button onClick={cancelEditing}>Cancel</button>
              </p>
            ) : (
              <p>
                {item.text}{" "}
                <button onClick={() => dispatch(delTodo(item.id))}>Delete</button>
                <button onClick={() => startEditing(item.id, item.text)}>Edit</button>
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}

export default App;
