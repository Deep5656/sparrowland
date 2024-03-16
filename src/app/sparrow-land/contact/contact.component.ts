import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup = new FormGroup<any>({});
  invalidUserNames:any[] = ['Aman','Deep'];

  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      'userDetails': new FormGroup({
        'firstName': new FormControl('', [Validators.required,this.invalidNames.bind(this)]),
        'lastName': new FormControl('', [Validators.required]),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'cityName': new FormControl('', [Validators.required]),
        'gender': new FormControl(''),
      }),
      'addComments': new FormArray([])
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
    if(this.form.valid){

    }else{
      alert('fill all the required fields')
    }
  }

  get addCommentsControls(): AbstractControl[] {
    return (this.form.get('addComments') as FormArray).controls;
  }

  invalidNames(control:FormControl):{[s:string]:boolean}{
    if(this.invalidUserNames.indexOf(control.value) != -1){
      return {'Invalid userName':true};
    }
    return {};
  }
}
