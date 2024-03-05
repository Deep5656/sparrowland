import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";

@Component({
    selector: 'debounce',
    templateUrl: 'debounce.component.html',
    styleUrls: ['debounce.component.scss']
})
export class debounceComponent implements OnInit, AfterViewInit {

    @ViewChild('myInput') myInput!: ElementRef;
    @ViewChild('myInput1') myInput1!: ElementRef;

    constructor() { }
    ngOnInit(): void { }

    ngAfterViewInit(): void {
        const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
            map(event => event?.target?.value),
            debounceTime(2000)
        );
        searchTerm.subscribe(res => {
            console.log(res);
        })

        const searchTerm1 = fromEvent<any>(this.myInput1.nativeElement, 'keyup').pipe(
            map(event => event?.target?.value),
            debounceTime(2000),
            distinctUntilChanged()
        );
        searchTerm1.subscribe(res => {
            console.log(res);
        })
    }





}