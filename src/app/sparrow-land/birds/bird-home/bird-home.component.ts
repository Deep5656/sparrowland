import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bird-home',
  templateUrl: './bird-home.component.html',
  styleUrls: ['./bird-home.component.scss']
})
export class BirdHomeComponent implements OnInit {

  searchVal:any='';
  form:FormGroup = new FormGroup<any>({});
  birdsArray:any=[];
  title:any='';
  Autoupdate:any = false;

  constructor( private fb:FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      'title': new FormControl('',[Validators.required]),
      'subtitle': new FormControl('',[Validators.required]),
      'about': new FormControl('',[Validators.required])
    });
    
    //@ts-ignore
    const birdsArray = JSON.parse(localStorage.getItem('birdsArray'));
    this.birdsArray = birdsArray;
    console.log(birdsArray);
  }

  add(){
    this.birdsArray.push(this.form.value);
    this.form.reset();
    console.log('birds array',this.birdsArray);
  }

  remove(i:any){
    console.log("i",i);
    this.birdsArray.splice(i,1);
  }

  cid:any;
  update(i:any){
   this.Autoupdate = true;
   this.cid = i;
   this.form.get('title')?.patchValue(this.birdsArray[i].title);
   this.form.get('subtitle')?.patchValue(this.birdsArray[i].subtitle);
   this.form.get('about')?.patchValue(this.birdsArray[i].about);
  }

  updateVal(){
    this.Autoupdate = false;
    this.birdsArray[this.cid].title = this.form.get('title')?.value;
    this.birdsArray[this.cid].subtitle = this.form.get('subtitle')?.value;
    this.birdsArray[this.cid].about = this.form.get('about')?.value;
    this.form.reset();
  }

  save(){    
    localStorage.setItem('birdsArray',JSON.stringify(this.birdsArray));
  }

  Like(i:any){

  }
}
