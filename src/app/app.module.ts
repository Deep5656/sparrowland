import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SparrowLandModule } from './sparrow-land/sparrow-land.module';
import { StoreModule } from '@ngrx/store';
import { counterReducre } from './sparrow-land/store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    SparrowLandModule,
    StoreModule.forRoot({
      counter:counterReducre
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  constructor(){
    console.log('AppModule loaded')
  }
 }
