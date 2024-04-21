import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AboutComponent } from "src/app/sparrow-land/about/about.component";
import { ContactComponent } from "src/app/sparrow-land/contact/contact.component";
import { DataService } from "../services/data.service";
import { BirdDialogComponent } from "src/app/sparrow-land/birds/bird-home/bird-dialog/bird-dialog.component";
import { SubjectService } from "../services/subject.service";

@Directive({
    selector: '[cardClick]'
})
export class cardclickDirective implements OnInit {

    @Input() cardId:any;
    @ViewChild('subTitle') subTitle:ElementRef;

    birdsArray: any;

    constructor(private renderer: Renderer2, private el: ElementRef, private dialog: MatDialog, private _dataService: DataService,private _subjectService:SubjectService) { }
    ngOnInit(): void {
        this.getAllBirds();
        const childElement = this.el.nativeElement.querySelector('mat-card-subtitle');
        const title = this.el.nativeElement.querySelector('mat-card-title');
        this.renderer.setStyle(childElement,'display','none');
        this.renderer.setStyle(title,'display','none');
        
    }

    @HostBinding('style.background-color') bgColor: any;
    @HostListener('click') onClick() {
        this.bgColor = 'pink';
    }

    @HostListener('mouseover') onMouseOver() {
        this.bgColor = '#c0caff';
        console.log("native element",this.el.nativeElement.querySelector('mat-card-subtitle'));
        const subtitle = this.el.nativeElement.querySelector('mat-card-subtitle');
        const title = this.el.nativeElement.querySelector('mat-card-title');
        this.renderer.setStyle(subtitle,'display','block');
        this.renderer.setStyle(title,'display','block');
    }

    @HostListener('mouseout') onMouseDown() {
        this.bgColor = 'white';
        const childElement = this.el.nativeElement.querySelector('mat-card-subtitle');
        const title = this.el.nativeElement.querySelector('mat-card-title');
        this.renderer.setStyle(childElement,'display','none');
        this.renderer.setStyle(title,'display','none');

    }

    @HostListener('dblclick') ondblClick() {
        this.bgColor = 'rgb(252, 166, 180)';
        this.renderer.removeStyle(this.el.nativeElement, 'border');
        const dialog = this.dialog.open(BirdDialogComponent, {
            width: '70%',
            height: '90%',
            data: {
                'birdArray':this.birdsArray,
                'cardId':this.cardId
            }
        })
    }

    getAllBirds() {
        this._dataService.getAllBirds().subscribe(res => {
            console.log(res);
            this.birdsArray = res;
            console.log("birds", this.birdsArray);
        });
    }
}