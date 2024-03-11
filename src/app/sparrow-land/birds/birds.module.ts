import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdHomeComponent } from './bird-home/bird-home.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BirdDialogComponent } from './bird-home/bird-dialog/bird-dialog.component';
import { MatIconModule } from '@angular/material/icon';



const birdRoute:Routes = [
  {path:'',component:BirdHomeComponent}
];

@NgModule({
    declarations: [
        BirdHomeComponent,
        BirdDialogComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        RouterModule.forChild(birdRoute),
        SharedModule
    ]
})
export class BirdsModule {
  constructor(){
    console.log("Birds loaded");
    
  }
 }
