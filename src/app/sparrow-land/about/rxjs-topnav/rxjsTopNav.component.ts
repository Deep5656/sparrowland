import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { fromEventComponent } from "./fromEvent/fromEvent.component";

@Component({
    selector:'jxjs-nav',
    templateUrl:'rxjsTopNav.component.html',
    styleUrls:['rxjsTopNav.component.scss']
})
export class rxjsNav implements OnInit{

    constructor(private router:Router,private dialog:MatDialog){}

    ngOnInit(): void {

    }

    moveTo(val:any){
        if(val=='fromEvent'){
            const dialog = this.dialog.open(fromEventComponent,{
                width:'70%',
                height:'70%'
            })
        }
    }
}