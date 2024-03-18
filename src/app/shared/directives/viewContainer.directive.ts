import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appViewContainer]'
})
export class ViewContainer{
    constructor(public viewContainer:ViewContainerRef){}

}