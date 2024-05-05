import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Editor } from '@ckeditor/ckeditor5-core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-bird-dialog',
  templateUrl: './bird-dialog.component.html',
  styleUrls: ['./bird-dialog.component.scss']
})
export class BirdDialogComponent implements OnInit {

  birdData: any;
  role: any;
  editMode: any = false;
  public Editor:any = ClassicEditor;

  public editorConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        '|',
        'bulletedList',
        'numberedList',
        '|',
        'undo',
        'redo'
      ]
    },
    language: 'en'
  };


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog,
              private dataService:DataService) { }
  ngOnInit(): void {
    let cardId = this.data.cardId;
    this.role = this.data.role;
    this.birdData = this.data.birdArray;
    this.birdData.filter((bird: any) => {
      if (bird.id === cardId) {
        this.birdData = bird;
      }
    })

    // this.role = localStorage.getItem("userRole");

    console.log("role",this.role);
    console.log("birdData", this.birdData);

  }

  close() {
    this.dialog.closeAll();
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      //save logic
    }
  }

}
