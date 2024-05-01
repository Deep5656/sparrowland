import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Subject} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SubjectService implements OnInit {

    userName = new BehaviorSubject<any>('Aman');

    role = new BehaviorSubject<any>('Normal');

    isHovering = new BehaviorSubject<any>(false);

    image = new Subject<any>();

    constructor() {
        console.log('subject service loaded');
    }

    ngOnInit(): void {}
}