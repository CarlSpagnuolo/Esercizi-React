// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// export type Todo = {
//   id: number;
//   text: string;
// };

// export const todoState = createSlice({
//   name: "todos",
//   initialState: [] as Todo[],
//   reducers: {
//     add: (state, action: PayloadAction<Todo>) => {
//       state.push(action.payload);
//     },
//     remove: (state, action: PayloadAction<number>) =>
//       state.filter((todo) => todo.id !== action.payload),
//     edit: (state, action: PayloadAction<Todo>) => {
//       const todo = state.find((todo) => todo.id === action.payload.id);
//       if (todo) {
//         todo.text = action.payload.text;
//       }
//     },
//     set: (_state, action: PayloadAction<Todo[]>) => action.payload,
//   },
// });

// export const defaultState = [] as Todo[];

// export const ADD = "TODOS@ADD";
// export const REMOVE = "TODO@REMOVE";
// export const EDIT = "TODO@EDIT";
// export const SET = "TODO@SET";

// export function addTodo(todo: Todo) {
//   return {
//     type: ADD,
//     payload: todo,
//   };
// }

// export function removeTodo(id: number) {
//   return {
//     type: REMOVE,
//     payload: id,
//   };
// }

// export function editTodo({ id, text }: { id: number; text: string }) {
//   return {
//     type: EDIT,
//     payload: { id, text },
//   };
// }

// export function setTodos(todos: []) {
//   return {
//     type: SET,
//     payload: todos,
//   };
// }

// export function todosReducer(state = defaultState, action: any) {
//   switch (action.type) {
//     case ADD: {
//       return [...state, action.payload];
//     }

//     case REMOVE: {
//       return state.filter((todo) => todo.id !== action.payload);
//     }

//     case EDIT: {
//       return state.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return {
//             id: todo.id,
//             text: action.payload.text,
//           };
//         }
//         return todo;
//       });
//     }

//     case SET: {
//       return [...action.payload];
//     }

//     default: {
//       return state;
//     }
//   }
// }
