import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/services/data.service';
import { BirdDialogComponent } from './bird-dialog/bird-dialog.component';

@Component({
  selector: 'app-bird-home',
  templateUrl: './bird-home.component.html',
  styleUrls: ['./bird-home.component.scss']
})
export class BirdHomeComponent implements OnInit {

  searchVal: any = '';
  form: FormGroup = new FormGroup<any>({});
  birdsArray: any = [];
  addBirdsArray: any = [];
  updatedBirdsArray: any = [];
  removeBirdsArray: any = [];
  addPayload: any;
  updatePayload: any[] = [];
  removePayload: any[] = [];
  title: any = '';
  Autoupdate: any = false;

  constructor(private fb: FormBuilder,
     private _dataService: DataService, 
     private dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'title': new FormControl('', [Validators.required]),
      'subTitle': new FormControl('', [Validators.required]),
      'about': new FormControl('', [Validators.required])
    });
    this.getAllBirds();
  }

  getAllBirds() {
    this._dataService.getAllBirds().subscribe(res => {
      this.birdsArray = res;
      console.log("birds", this.birdsArray);
    });
  }

  add() {
    this.birdsArray.push(this.form.value);
    console.log("this.form.value", this.form.value);
    this.createBird(this.form.value);
    this.form.reset();
  }

  remove(i: any) {
    console.log("i", i);
    this.removeBirdsArray.push(this.birdsArray[i]);
    this.removeBird(this.birdsArray[i]);
    this.birdsArray.splice(i, 1);

  }

  cid: any;
  cardUpdateBtn(i: any) {
    this.Autoupdate = true;
    this.cid = i;
    this.form.get('title')?.patchValue(this.birdsArray[i]?.title);
    this.form.get('subTitle')?.patchValue(this.birdsArray[i]?.subTitle);
    this.form.get('about')?.patchValue(this.birdsArray[i]?.about);
    console.log("bird to update",this.birdsArray[i]);
  }

  updateBtn() {
    this.Autoupdate = false;
    this.birdsArray[this.cid].title = this.form.get('title')?.value;
    this.birdsArray[this.cid].subTitle = this.form.get('subTitle')?.value;
    this.birdsArray[this.cid].about = this.form.get('about')?.value;
    console.log("update bird", this.birdsArray[this.cid]);
    this.updateBird(this.birdsArray[this.cid]);
    this.form.reset();
  }

  createBird(payload: any) {
    console.log("create payload", payload);
    this._dataService.createBird(payload).subscribe({
      next: (res) => {
        console.log("added", res);
        this.getAllBirds();
      },
      error: (err) => {
        console.log("add error", err);
      }
    })
  }

  updateBird(payload: any) {
    console.log("update payload", payload);
    this._dataService.updateBird(payload).subscribe({
      next: (res) => {
        console.log("updated", res);
        this.getAllBirds();
      },
      error: (err) => {
        console.log(" update error", err);
      }
    })
  }

  removeBird(payload: any) {
    console.log("remove payload", payload);
    this._dataService.removeBird(payload).subscribe({
      next: (res) => {
        console.log("Removed", res);
      },
      error: (err) => {
        console.log("remove err", err);
      }
    })
  }

  cardId:any;
  birdArray:any;
  showMore(index:any){
    const dialog = this.dialog.open(BirdDialogComponent, {
      width: '70%',
      height: '90%',
      data: {
          'birdArray':this.birdsArray,
          'cardId':index
      }
  })
  }

}
