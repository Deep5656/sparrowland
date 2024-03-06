import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { rxjsNav } from './about/rxjs-topnav/rxjsTopNav.component';
import { fromEventComponent } from './about/rxjs-topnav/fromEvent/fromEvent.component';
import { debounceComponent } from './about/rxjs-topnav/debounce/debounce.component';
import { SubjectComponent } from './about/rxjs-topnav/subject/subject.component';
import { Comp1Component } from './about/rxjs-topnav/subject/comp1/comp1.component';
import { Comp2Component } from './about/rxjs-topnav/subject/comp2/comp2.component';
import { HttpClientModule } from '@angular/common/http';


const sparrowLandRoutes:Routes = [
  {path:'birds', data:{preload:true}, loadChildren: () => import('./birds/birds.module').then(m => m.BirdsModule)},
  {path:'plants', loadChildren: () => import('./plants/plants.module').then(m => m.PlantsModule)},
  {path:'animal', data:{preload:true}, loadChildren: () => import('./animals/animals.module').then(m => m.AnimalModule)}
];

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    rxjsNav,
    fromEventComponent,
    debounceComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forChild(sparrowLandRoutes),
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
