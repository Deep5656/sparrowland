import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { rxjsNav } from 'src/app/sparrow-land/about/rxjs-topnav/rxjsTopNav.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  backFlag:any = true;
  constructor(private router:Router,private dialog:MatDialog){}

  rxjs(){
    this.backFlag = false;
    const dialog = this.dialog.open(rxjsNav,{
      width:'80%',
      height:'90%'
    })
  }

  back(){
    this.backFlag = true;
    this.router.navigate(['about'])
}
}
