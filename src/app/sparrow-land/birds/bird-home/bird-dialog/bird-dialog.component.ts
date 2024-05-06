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
  HindiMode: any = true;
  public Editor: any = ClassicEditor;

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
    private dataService: DataService) { }
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

    console.log("role", this.role);
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

// // Function to convert text into Hindi using a translation service
// async  convertToHindi(text) {
//   try {
//       // Make a request to a translation API (replace 'YOUR_API_KEY' and 'en' with your actual API key and source language)
//       const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&q=${encodeURIComponent(text)}&target=hi&source=en`);
      
//       // Check if the response is successful
//       if (!response.ok) {
//           throw new Error('Translation request failed');
//       }
      
//       // Parse the response and extract the translated text
//       const data = await response.json();
      
//       // Check if the data format is as expected
//       if (!data || !data.data || !data.data.translations || data.data.translations.length === 0) {
//           throw new Error('Invalid translation response');
//       }
      
//       const hindiText = data.data.translations[0].translatedText;
      
//       return hindiText;
//   } catch (error) {
//       console.error("Translation error:", error);
//       throw error; // Re-throw the error to handle it outside of this function
//   }
// }

// // Sample text in English
//  englishText:any = 'this is good';

// // Function to convert English text to Hindi
// async  convertText() {
//   try {
//       const hindiText = await this.convertToHindi(this.englishText);
//       console.log(hindiText); // Output or display the converted text in Hindi
//   } catch (error) {
//       // Handle the error
//   }
// }

// // Call the function to convert text to Hindi
// // convertText();


}
