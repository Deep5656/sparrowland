import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bird-dialog',
  templateUrl: './bird-dialog.component.html',
  styleUrls: ['./bird-dialog.component.scss']
})
export class BirdDialogComponent implements OnInit{

  birdData:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog:MatDialog){}
  ngOnInit(): void {
    let cardId = this.data.cardId
    this.birdData = this.data.birdArray;
    this.birdData.filter((bird:any)=>{
      if(bird.id === cardId){
        this.birdData = bird;
      }
    })

    console.log("birdData",this.birdData);
    
  }

  close(){
    this.dialog.closeAll();
  }


}
