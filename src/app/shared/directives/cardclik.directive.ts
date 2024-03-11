import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AboutComponent } from "src/app/sparrow-land/about/about.component";
import { ContactComponent } from "src/app/sparrow-land/contact/contact.component";
import { DataService } from "../services/data.service";
import { BirdDialogComponent } from "src/app/sparrow-land/birds/bird-home/bird-dialog/bird-dialog.component";

@Directive({
    selector: '[cardClick]'
})
export class cardclickDirective implements OnInit {

    @Input() cardId:any;

    birdsArray: any;

    constructor(private renderer: Renderer2, private el: ElementRef, private dialog: MatDialog, private _dataService: DataService) { }
    ngOnInit(): void {
        this.getAllBirds();
    }

    @HostBinding('style.background-color') bgColor: any;
    @HostListener('click') onClick() {
        this.bgColor = 'pink';
        // this.renderer.setStyle(this.el.nativeElement,'border','2px solid olive');
    }

    @HostListener('mouseover') onMouseOver() {
        this.bgColor = '#c0caff';
    }

    @HostListener('mouseout') onMouseDown() {
        this.bgColor = 'white';
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