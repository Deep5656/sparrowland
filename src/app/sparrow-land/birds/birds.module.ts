import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdHomeComponent } from './bird-home/bird-home.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

const birdRoute:Routes = [
  {path:'',component:BirdHomeComponent}
];

@NgModule({
  declarations: [
    BirdHomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forChild(birdRoute)
  ]
})
export class BirdsModule {
  constructor(){
    console.log("Birds loaded");
    
  }
 }
