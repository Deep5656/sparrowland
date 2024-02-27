import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


const sparrowLandRoutes:Routes = [
  {path:'birds', data:{preload:true}, loadChildren: () => import('./birds/birds.module').then(m => m.BirdsModule)},
  {path:'plants', loadChildren: () => import('./plants/plants.module').then(m => m.PlantsModule)},
  {path:'animal', data:{preload:true}, loadChildren: () => import('./animals/animals.module').then(m => m.AnimalModule)}
];

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(sparrowLandRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class SparrowLandModule { 
  constructor(){
    console.log("sparrowLand loaded");
    
  }
}
