import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[cardClick]'
})
export class cardclickDirective{

    constructor(private renderer:Renderer2,private el:ElementRef){}

    @HostBinding('style.background-color') bgColor:any;
    @HostListener('click') onClick(){
        this.bgColor = 'purple';
        this.renderer.setStyle(this.el.nativeElement,'border','2px solid olive');
    }

    @HostListener('mouseover') onMouseOver(){
        this.bgColor = 'pink';
    }

    @HostListener('mouseout') onMouseDown(){
        this.bgColor = 'yellow';
    }

    @HostListener('dblclick') ondblClick(){
        this.bgColor = 'green';
        this.renderer.removeStyle(this.el.nativeElement,'border');
    }
}