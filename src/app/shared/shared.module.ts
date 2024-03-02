import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './components/topnav/topnav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { SubjectService } from './services/subject.service';
import { customPreLoadService } from './services/custom_preload.service';
import { shortTxt } from './pipes/shortTxt.pipe';
import { filterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    TopnavComponent,
    shortTxt,
    filterPipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  providers:[
    SubjectService,
    DataService,
    customPreLoadService
  ],
  exports: [
    TopnavComponent,
    shortTxt,
    filterPipe
    ]
})
export class SharedModule { 
  constructor(){
    console.log("shared module loaded");
    
  }
}
