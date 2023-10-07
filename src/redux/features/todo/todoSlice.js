import {createSlice, nanoid} from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default to localStorage

// const persistConfig = {
//   key: 'root', // Key under which the state will be stored in localStorage
//   storage,
// };
const initialState = {
    todos:[{
        id:1,
        text:'Hello Arshad, How are you! :)'}]
}

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
        },
        delTodo:(state,action)=>{
            state.todos = state.todos.filter((item)=> item.id !== action.payload)
        },

        editTodo:(state,action)=>{
            const { id,newText } = action.payload
            const editTodos = state.todos.find((e) => e.id === id)
            if(editTodos){
                editTodos.text = newText
            }
        }
        // editTodo: (state, action) => {
        //     const { id, newText } = action.payload;
        //     const editTodos = state.todos.find((e) => e.id === id);
        //     if (editTodos) {
        //       editTodos.text = newText;
        //     }
        //   }
          
    }

})
// const persistedReducer = persistReducer(persistConfig, todoSlice.reducer);

export const {addtodo, delTodo, editTodo} = todoSlice.actions
// export default persistedReducer
export default todoSlice.reducer