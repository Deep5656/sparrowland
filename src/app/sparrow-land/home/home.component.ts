import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  BirdImages:any = [
    
  ];
  AnimalImages:any = [
    {src:'SL1.jpg',name:'img1'},
    {src:'SL2.jpg',name:'img2'},
    {src:'SL3.jpg',name:'img3'},
    {src:'SL3.jpg',name:'img3'},
    {src:'SL3.jpg',name:'img3'},
    {src:'SL3.jpg',name:'img3'},
    {src:'SL3.jpg',name:'img3'},
  ];
  PlantImages:any = [
    {src:'SL1.jpg',name:'img1'},
    {src:'SL2.jpg',name:'img2'},
    {src:'SL3.jpg',name:'img3'},
    {src:'SL3.jpg',name:'img3'},
    {src:'SL3.jpg',name:'img3'},
    {src:'SL3.jpg',name:'img3'},
    {src:'SL3.jpg',name:'img3'},
  ];

  constructor(private _dataService:DataService){}

  ngOnInit(){

    //test
    this._dataService.getAll()
    .pipe(
      tap(event => {
        console.log("tap event",event);
        if(event.type === HttpEventType.Response){
          console.log(event.body);
        } 
      })
    )
    .subscribe({
      next: (res:any) =>{
        console.log("this.birdsArray",res);
        this.BirdImages = this.shuffleArray(res.body);
      },
      error : (err:any) => {
        console.log(err);
      }
    });
    console.log('getAll');

    
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at index i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  prev(){
    console.log('clicked');
    
  }
  next(){
    console.log('clicked');
    window.scrollBy(100,100);
  }
}
