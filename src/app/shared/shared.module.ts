import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './components/topnav/topnav.component';
import { errorComponent } from './components/error/error.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { SubjectService } from './services/subject.service';
import { customPreLoadService } from './services/custom_preload.service';
import { shortTxt } from './pipes/shortTxt.pipe';
import { filterPipe } from './pipes/filter.pipe';
import { rainbowDirective } from './directives/rainbow.directive';
import { cardclickDirective } from './directives/cardclik.directive';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/authGuard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-intercepter.service';
import { confirmDeleteComponent } from './components/confirmDelete/confirmDelete.component';



@NgModule({
  declarations: [
    TopnavComponent,
    shortTxt,
    filterPipe,
    rainbowDirective,
    cardclickDirective,
    errorComponent,
    confirmDeleteComponent
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
    customPreLoadService,
    AuthService,
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  exports: [
    TopnavComponent,
    shortTxt,
    filterPipe,
    rainbowDirective,
    cardclickDirective,
    errorComponent,
    confirmDeleteComponent
    ],
  
})
export class SharedModule { 
  constructor(){
    console.log("shared module loaded");
    
  }
}
