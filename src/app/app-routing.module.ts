import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './sparrow-land/about/about.component';
import { ContactComponent } from './sparrow-land/contact/contact.component';
import { HomeComponent } from './sparrow-land/home/home.component';
import { customPreLoadService } from './shared/services/custom_preload.service';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:customPreLoadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
