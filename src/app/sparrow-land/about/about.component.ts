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

  constructor(private router:Router,private dialog:MatDialog){}

  rxjs(){
    const dialog = this.dialog.open(rxjsNav,{
      width:'80%',
      height:'90%'
    })
  }
}
