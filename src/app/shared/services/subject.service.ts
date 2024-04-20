import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SubjectService implements OnInit {

    userName = new BehaviorSubject<any>('Aman');

    role = new BehaviorSubject<any>('Normal');

    constructor() {
        console.log('subject service loaded');
    }

    ngOnInit(): void {}
}