import { Component, signal } from "@angular/core";

@Component({
    selector:'signal',
    templateUrl:'signals.component.html',
})
export class SignalComponent{

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
}