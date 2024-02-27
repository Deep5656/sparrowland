import { Injectable, OnInit } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class SubjectService implements OnInit{

    constructor(){
        console.log('subject service loaded');
        
    }

    ngOnInit(): void {
    }
}