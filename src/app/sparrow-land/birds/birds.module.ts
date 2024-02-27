import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdHomeComponent } from './bird-home/bird-home.component';
import { RouterModule, Routes } from '@angular/router';

const birdRoute:Routes = [
  {path:'',component:BirdHomeComponent}
];

@NgModule({
  declarations: [
    BirdHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(birdRoute)
  ]
})
export class BirdsModule {
  constructor(){
    console.log("Birds loaded");
    
  }
 }
