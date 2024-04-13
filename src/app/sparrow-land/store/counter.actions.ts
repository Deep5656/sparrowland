import { Action, createAction, props } from "@ngrx/store";

// export const increment = createAction(
//     '[counter] Increment',
//     props<{value:number}>()
// );

export class incrementAction implements Action {
    readonly type: string = '[counter] Increment';

    constructor(public value:number){}
}