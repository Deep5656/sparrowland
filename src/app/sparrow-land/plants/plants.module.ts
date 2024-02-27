import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[],
    imports:[CommonModule],
    exports:[]
})
export class PlantsModule{
    constructor(){
        console.log('plants module loaded'); 
    }
}