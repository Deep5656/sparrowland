import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[cardClick]'
})
export class cardclickDirective{

    constructor(private renderer:Renderer2,private el:ElementRef){}

    @HostBinding('style.background-color') bgColor:any;
    @HostListener('click') onClick(){
        this.bgColor = 'pink';
        // this.renderer.setStyle(this.el.nativeElement,'border','2px solid olive');
    }

    @HostListener('mouseover') onMouseOver(){
        this.bgColor = '#c0caff';
    }

    @HostListener('mouseout') onMouseDown(){
        this.bgColor = 'white';
    }

    @HostListener('dblclick') ondblClick(){
        this.bgColor = 'rgb(252, 166, 180)';
        this.renderer.removeStyle(this.el.nativeElement,'border');
    }
}