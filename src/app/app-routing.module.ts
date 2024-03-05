import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './sparrow-land/about/about.component';
import { ContactComponent } from './sparrow-land/contact/contact.component';
import { HomeComponent } from './sparrow-land/home/home.component';
import { customPreLoadService } from './shared/services/custom_preload.service';
import { rxjsNav } from './sparrow-land/about/rxjs-topnav/rxjsTopNav.component';
import { fromEventComponent } from './sparrow-land/about/rxjs-topnav/fromEvent/fromEvent.component';
import { debounceComponent } from './sparrow-land/about/rxjs-topnav/debounce/debounce.component';
import { SubjectComponent } from './sparrow-land/about/rxjs-topnav/subject/subject.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent,children:[
    {path:'formEvent',component:fromEventComponent},
    {path:'debounce',component:debounceComponent},
    {path:'subject',component:SubjectComponent}
  ]},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:customPreLoadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
