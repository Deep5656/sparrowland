import { createReducer, on } from "@ngrx/store";
// import { increment } from "./counter.actions";

const initialState = 0
export const counterReducre = createReducer(
    initialState,
    // on(increment, (state,action) => state + action.value)
);

//alternate approch....
// export function counterReducre(state = createReducer){
//     return state;
// }