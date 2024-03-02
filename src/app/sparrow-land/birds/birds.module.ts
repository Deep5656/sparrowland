import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdHomeComponent } from './bird-home/bird-home.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



const birdRoute:Routes = [
  {path:'',component:BirdHomeComponent}
];

@NgModule({
    declarations: [
        BirdHomeComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        RouterModule.forChild(birdRoute),
        SharedModule
    ]
})
export class BirdsModule {
  constructor(){
    console.log("Birds loaded");
    
  }
 }
