import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
    selector: 'rxjs-nav',
    templateUrl: 'rxjsTopNav.component.html',
    styleUrls: ['rxjsTopNav.component.scss']
})
export class rxjsNav implements OnInit {

    constructor(private router: Router, private dialog: MatDialog) { }

    ngOnInit(): void {

    }
    

    moveTo(val: any) {
        if (val == 'fromEvent') {
            this.router.navigate(['about/formEvent']);
        }
        if (val == 'debounce') {
            this.router.navigate(['about/debounce']);
        }
        if (val == 'subject') {
            this.router.navigate(['about/subject']);
        }
        if (val == 'replaySubject') {
            this.router.navigate(['about/replaySubject']);
        }
        if (val == 'replaySubject') {
            this.router.navigate(['about/replaySubject']);
        }
        if (val == 'signals') {
            this.router.navigate(['about/signals']);
        }
        
        this.dialog.closeAll();
    }


}