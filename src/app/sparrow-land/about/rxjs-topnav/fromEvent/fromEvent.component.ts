import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";

@Component({
    selector: 'fromEvent',
    templateUrl: 'fromEvent.component.html',
    styleUrls: ['fromEvent.component.scss']
})
export class fromEventComponent implements OnInit, AfterViewInit {

    @ViewChild('addBtn') addBtn!: ElementRef;

    constructor() { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        let count = 1;
        console.log(this.addBtn?.nativeElement);
        if (this.addBtn?.nativeElement) {
            fromEvent(this.addBtn?.nativeElement, 'click').subscribe((res) => {
                let videoVal = "Video" + count++;
                console.log(videoVal);
                this.add(videoVal)

            })
        }

    }

    add(val: any) {
        let li = document.createElement('li');
        li.innerText = val;
        document.getElementById('ulElemId')?.appendChild(li);
    }

}