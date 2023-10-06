import {createSlice, nanoid} from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default to localStorage

const persistConfig = {
  key: 'root', // Key under which the state will be stored in localStorage
  storage,
};
const initialState = {
    todos:[{
        id:1,
        text:'Hello Arshad, How are you! :)'}]
}

// const initialState = JSON.parse(localStorage.getItem("todos")) || {
//     todos: [
//       {
//         id: 1,
//         text: 'Hello Arshad, How are you! :)'
//       }
//     ]
//   };
export const todoSlice = createSlice({
    name:"Todos",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
            // localStorage.setItem("todos",JSON.stringify(state.todos))
        },
        delTodo:(state,action)=>{
            state.todos = state.todos.filter((item)=> item.id !== action.payload)
        }
    }

})
const persistedReducer = persistReducer(persistConfig, todoSlice.reducer);

export const {addtodo, delTodo} = todoSlice.actions
export default persistedReducer