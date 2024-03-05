import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { fromEventComponent } from "./fromEvent/fromEvent.component";

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
        this.dialog.closeAll();
    }


}