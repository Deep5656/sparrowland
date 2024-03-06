import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-bird-home',
  templateUrl: './bird-home.component.html',
  styleUrls: ['./bird-home.component.scss']
})
export class BirdHomeComponent implements OnInit {

  searchVal: any = '';
  form: FormGroup = new FormGroup<any>({});
  birdsArray: any = [];
  updatedBirdsArray: any = [];
  title: any = '';
  Autoupdate: any = false;

  constructor(private fb: FormBuilder, private _dataService: DataService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'title': new FormControl('', [Validators.required]),
      'subtitle': new FormControl('', [Validators.required]),
      'about': new FormControl('', [Validators.required])
    });

    this.getAllBirds();

  }

  getAllBirds() {
    this._dataService.getAllBirds().subscribe(res => {
      console.log(res);
      this.birdsArray = res;
      // this.oldBirdsArray = this.birdsArray;
      console.log("birds", this.birdsArray);


    });
  }

  add() {
    this.birdsArray.push(this.form.value);
    this.form.reset();
    console.log('birds array', this.birdsArray);
  }

  remove(i: any) {
    console.log("i", i);
    this.birdsArray.splice(i, 1);
  }

  cid: any;
  update(i: any) {
    this.Autoupdate = true;
    this.cid = i;
    this.form.get('title')?.patchValue(this.birdsArray[i].title);
    this.form.get('subtitle')?.patchValue(this.birdsArray[i].subTitle);
    this.form.get('about')?.patchValue(this.birdsArray[i].about);
  }

  updateVal() {
    this.Autoupdate = false;
    this.birdsArray[this.cid].title = this.form.get('title')?.value;
    this.birdsArray[this.cid].subTitle = this.form.get('subtitle')?.value;
    this.birdsArray[this.cid].about = this.form.get('about')?.value;
    console.log("UPDATED ITEMS", this.birdsArray[this.cid]);
    this.updatedBirdsArray.push(this.birdsArray[this.cid]);
    this.form.reset();
  }

  save() {
    let payload: any[] = [];
    let updatePayload: any[] = [];
    for (let bird = 0; bird < this.birdsArray.length; bird++) {
      if (!(this.birdsArray[bird]?.id)) {
        payload.push(
          {
            "title": this.birdsArray[bird].title,
            "subTitle": this.birdsArray[bird].subtitle,
            "about": this.birdsArray[bird].about
          }
        )
      } else {
        if (this.updatedBirdsArray[bird]?.id) {
          updatePayload = this.updatedBirdsArray;
        }
      }
    }
    if (payload?.length != 0) {
      console.log("payload", payload);
      this._dataService.createBird(payload).subscribe({
        next: (res) => {
          console.log("added", res);
        },
        error: (err) => {
          console.log("add error", err);
        }
      })
    }
    if (updatePayload?.length != 0) {
      console.log("updatePayload", updatePayload);
      this._dataService.updateBird(updatePayload).subscribe({
        next: (res) => {
          console.log("updated", res);
        },
        error: (err) => {
          console.log(" update error", err);
        }
      })
    }
  }

  Like(i: any) {

  }
}
