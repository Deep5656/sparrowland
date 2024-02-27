import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  form:FormGroup = new FormGroup<any>({});

  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.form = this.fb.group({
      'firstName': new FormControl('',[Validators.required]),
      'lastName': new FormControl('',[Validators.required]),
      'email': new FormControl('',[Validators.required,Validators.email]) 
    })
  }


 
}
