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
    {src:'SL1.jpg',name:'img1'},
    {src:'SL2.jpg',name:'img2'},
    {src:'SL3.jpg',name:'img3'},
    {src:'SL3.jpg',name:'img3'},
    {src:'SL3.jpg',name:'img3'},
    {src:'SL3.jpg',name:'img3'},
    {src:'SL3.jpg',name:'img3'},
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
        // if(event.type === HttpEventType.Sent){
        //   // console.log();
          
        // }
        if(event.type === HttpEventType.Response){
          console.log(event.body);
        } 
      })
    )
    .subscribe({
      next: (res:any) =>{
        console.log(res);
      },
      error : (err:any) => {
        console.log(err);
      }
    });
    console.log('getAll');
    
  }

  prev(){
    console.log('clicked');
    
  }
  next(){
    console.log('clicked');
    window.scrollBy(100,100);
  }
}
