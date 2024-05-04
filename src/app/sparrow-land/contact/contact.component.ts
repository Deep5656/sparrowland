import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup = new FormGroup<any>({});
  birdForm: FormGroup = new FormGroup<any>({});
  invalidUserNames: any[] = ['Aman', 'Deep'];

  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef,private dataService:DataService) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      'userDetails': new FormGroup({
        'firstName': new FormControl('', [Validators.required, this.invalidNames.bind(this)]),
        'lastName': new FormControl('', [Validators.required]),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'cityName': new FormControl('', [Validators.required]),
        'gender': new FormControl(''),
      }),
      'addComments': new FormArray([])
    });

    this.birdForm = this.fb.group({
      'birdFormDetails': new FormGroup({
        'birdName': new FormControl('', [Validators.required]),
        'birdSubTitle': new FormControl('', [Validators.required]),
        'aboutBird': new FormControl('', [Validators.required]),
        'birdImage': new FormControl('',[Validators.required]),
        'userName': new FormControl('',[Validators.required])
      })
    })
  }

  addComments() {
    (this.form.get('addComments') as FormArray).push(new FormControl(''));
    this.cdRef.detectChanges();
    console.log('formArray', this.addCommentsControls);
  }

  removeComment() {
    const commentsArray = this.form.get('addComments') as FormArray;
    if (commentsArray.length > 0) {
      commentsArray.removeAt(commentsArray.length - 1);
      this.cdRef.detectChanges();
      console.log('Removed last comment. Updated formArray:', commentsArray);
    } else {
      console.log('No comments to remove.');
      alert('No comments to remove.');
    }
  }


  submitForm() {
    console.log("form", this.form);
    if (this.form.valid) {

    } else {
      alert('fill all the required fields')
    }
  }

  get addCommentsControls(): AbstractControl[] {
    return (this.form.get('addComments') as FormArray).controls;
  }

  invalidNames(control: FormControl): { [s: string]: boolean } {
    if (this.invalidUserNames.indexOf(control.value) != -1) {
      return { 'Invalid userName': true };
    }
    return {};
  }


  selectedImage:any;
  onFileSelected(event:any){
    console.log("event:",event.target.files[0]); 
    this.selectedImage = event.target.files[0]; 
  }

  SendBird(){
    console.log("bird form:",this.birdForm);
    let payload:any = {
      "birdName":this.birdForm.value.birdFormDetails.birdName,
      "birdSubTitle":this.birdForm.value.birdFormDetails.birdSubTitle,
      "aboutBird":this.birdForm.value.birdFormDetails.aboutBird,
      "userName":this.birdForm.value.birdFormDetails.userName,
      "birdImage":this.selectedImage,
      "birdImageName":this.selectedImage.name
    }
    try{
      this.createUserBird(payload);
      this.birdForm.reset();
      alert("Sent successfully");

    }catch(e){
      console.error("Error sending bird data:", e); // Log the error
        alert("Failed to send data. Please try again.");
    }
   
  }
  
  createUserBird(payload:any){
    console.log("payload",payload);
    this.dataService.createUserBird(payload).subscribe((res)=>{
      console.log(res);
    })
  }
}
