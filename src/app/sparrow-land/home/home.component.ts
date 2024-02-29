import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  prev(){
    console.log('clicked');
    
  }
  next(){
    console.log('clicked');
    window.scrollBy(100,100);
  }
}
