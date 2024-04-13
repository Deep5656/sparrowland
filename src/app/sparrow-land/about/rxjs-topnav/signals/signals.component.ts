import { Component, signal } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { incrementAction } from "src/app/sparrow-land/store/counter.actions";

@Component({
    selector:'signal',
    templateUrl:'signals.component.html',
})
export class SignalComponent{

    count$: Observable<number>;
    constructor(private store:Store<{counter:number}>){
        this.count$ = store.select('counter');
        // this.count$ = store.
    }

    actions = signal<string[]>([]);
    counter = signal(0);

    increment(){
        // this.counter.update((oldCounter)=> oldCounter + 1);
        this.counter.set(this.counter() + 1);
        // this.actions.push("INCREMENT")
        this.actions.mutate((oldActions) => oldActions.push("INCREMENT"))
    }

    decrement(){
        this.counter.update((oldCounter) => oldCounter - 1);
        // this.actions.push("DECREMENT")
        this.actions.update((oldActions) => [...oldActions,'DECREMENT']);
    }

    Increment(){
        console.log('this.is increment');
        // this.store.dispatch(increment({value:2}));
        this.store.dispatch(new incrementAction(2));
    }

    Decrement(){

    }
}