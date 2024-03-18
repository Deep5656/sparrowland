import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './sparrow-land/about/about.component';
import { ContactComponent } from './sparrow-land/contact/contact.component';
import { HomeComponent } from './sparrow-land/home/home.component';
import { customPreLoadService } from './shared/services/custom_preload.service';
import { fromEventComponent } from './sparrow-land/about/rxjs-topnav/fromEvent/fromEvent.component';
import { debounceComponent } from './sparrow-land/about/rxjs-topnav/debounce/debounce.component';
import { SubjectComponent } from './sparrow-land/about/rxjs-topnav/subject/subject.component';
import { replaySubjectComponent } from './sparrow-land/about/rxjs-topnav/replaySubject/replaySubject.component';
import { AuthGuard } from './shared/services/authGuard.service';
import { errorComponent } from './shared/components/error/error.component';
import { SignalComponent } from './sparrow-land/about/rxjs-topnav/signals/signals.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  // ,canActivateChild:[AuthGuard]
  {path:'about',component:AboutComponent,children:[
    {path:'formEvent',component:fromEventComponent},
    {path:'debounce',component:debounceComponent},
    {path:'subject',component:SubjectComponent},
    {path:'replaySubject',component:replaySubjectComponent},
    {path:'signals',component:SignalComponent},
  ]},
  {path:'contact',component:ContactComponent},
  {path:'birds', data:{preload:true}, loadChildren: () => import('./sparrow-land/birds/birds.module').then(m => m.BirdsModule)},
  {path:'plants', loadChildren: () => import('./sparrow-land/plants/plants.module').then(m => m.PlantsModule)},
  {path:'animal', data:{preload:true}, loadChildren: () => import('./sparrow-land/animals/animals.module').then(m => m.AnimalModule)},
  {path:'not-found',component:errorComponent,data:{message:"Page Not Found"}},
  {path:'**',redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:customPreLoadService,
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
