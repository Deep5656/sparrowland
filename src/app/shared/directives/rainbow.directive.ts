import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[rainbow]'
})
export class rainbowDirective{

    possibleColors = [
        'darksalmon',
        'hotpink',
        'lightskyblue',
        'goldenrod',
        'peachpuff',
        'mediumspringgreen',
        'cornflowerblue',
        'blanchedalmond',
        'lightslategrey'
      ];

      @HostBinding('style.color') color:any;
      @HostBinding('style.border-color') border:any;
      @HostListener('keydown') newColor(){
        const colorPicker = Math.floor(Math.random() * this.possibleColors.length);
        this.color = this.border = this.possibleColors[colorPicker];
      }
}