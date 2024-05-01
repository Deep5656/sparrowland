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
import { AdminLogin } from './bird-home/admin-login/admin-login.component';
import {MatBadgeModule} from '@angular/material/badge';
import { NotificationComponent } from './bird-home/notifications/notification.component';
import { userBirdDialogComponent } from './bird-home/notifications/user-bird-dialog/user-bird-dialog.component';



const birdRoute:Routes = [
  {path:'',component:BirdHomeComponent}
];

@NgModule({
    declarations: [
        BirdHomeComponent,
        BirdDialogComponent,
        AdminLogin,
        NotificationComponent,
        userBirdDialogComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatBadgeModule,
        RouterModule.forChild(birdRoute),
        SharedModule
    ]
})
export class BirdsModule {
  constructor(){
    console.log("Birds loaded");
    
  }
 }
