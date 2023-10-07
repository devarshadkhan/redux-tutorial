import {configureStore} from "@reduxjs/toolkit"
import todoReducre from "../features/todo/todoSlice"

export const store =  configureStore  ({
    reducer:todoReducre,
})

// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist'; // Import persistStore
// import persistedReducer from "../features/todo/todoSlice";

// const store = configureStore({
//   reducer: persistedReducer, // Use the persisted reducer
// });

// const persistor = persistStore(store); // Initialize persistor

// export { store, persistor }; // Export both store and persistor
