import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
    selector:'error',
    templateUrl:'error.component.html',
    styleUrls:['error.component.scss']
})
export class errorComponent implements OnInit{

    errorMsg:string = '';

    constructor(private route:ActivatedRoute){}

    ngOnInit(): void {
        // this.errorMsg = this.route.snapshot.data['message'];
        this.route.data.subscribe((data:Data) => {
            this.errorMsg = data['message'];
        })
    }

}