import { ChangeDetectorRef, Component, ComponentFactoryResolver, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/services/data.service';
import { BirdDialogComponent } from './bird-dialog/bird-dialog.component';
import { confirmDeleteComponent } from 'src/app/shared/components/confirmDelete/confirmDelete.component';
import { ViewContainer } from 'src/app/shared/directives/viewContainer.directive';
// import swal from 'sweetalert';
import swal from 'sweetalert2'
import { SubjectService } from 'src/app/shared/services/subject.service';
import { AboutComponent } from '../../about/about.component';
import { AdminLogin } from './admin-login/admin-login.component';

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
  @ViewChild(ViewContainer) container: ViewContainer;
  selectedFile: any = null;
  role:any;
  user:any;
  

  constructor(private fb: FormBuilder,
    private _dataService: DataService,
    private dialog: MatDialog,
    private _subjectService:SubjectService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'title': new FormControl('', [Validators.required]),
      'subTitle': new FormControl('', [Validators.required]),
      'about': new FormControl('', [Validators.required]),
      'image': new FormControl('', [Validators.required])
    });
    this.getAllBirds();

    this._subjectService.role.subscribe((res)=>{
      this.role = res;
      console.log("bird comp role",this.role);
      
    })

  }

  getAllBirds() {
    this._dataService.getAllBirds().subscribe(res => {
      this.birdsArray = res;
      console.log("birds", this.birdsArray);
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log("this.selectedFile", this.selectedFile);

  }
  add() {
    this.form.value['image'] = this.selectedFile;
    this.birdsArray.push(this.form.value);
    console.log("this.form.value", this.form.value);
    this.createBird(this.form.value);
    this.form.reset();
  }

  remove(i: any) {
    console.log("i", i);  
    swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to Remove this Bird?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.removeBirdsArray.push(this.birdsArray[i]);
        this.removeBird(this.birdsArray[i]);
        this.birdsArray.splice(i, 1);
        swal.fire("Deleted!", "Your Bird has been Removed!", "success");
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire("Cancelled", "Your Bird is safe :)", "error");
      }
    });
    
  

  }



  cid: any;
  cardUpdateBtn(i: any) {
    this.Autoupdate = true;
    this.cid = i;
    this.form['id'] = this.birdsArray[i].id;
    this.form.get('title')?.patchValue(this.birdsArray[i]?.title);
    this.form.get('subTitle')?.patchValue(this.birdsArray[i]?.subTitle);
    this.form.get('about')?.patchValue(this.birdsArray[i]?.about);
    console.log("bird to update", this.birdsArray[i]);

  }

  updateBtn() {
    this.Autoupdate = false;
    this.birdsArray[this.cid].id = this.form['id'];
    this.birdsArray[this.cid].title = this.form.get('title')?.value;
    this.birdsArray[this.cid].subTitle = this.form.get('subTitle')?.value;
    this.birdsArray[this.cid].about = this.form.get('about')?.value;
    this.birdsArray[this.cid].image = this.form.get('image')?.value;
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
      },
      complete: () => {
        console.log("completed");
      }
    })
  }

  showMore(index: any) {
    const dialog = this.dialog.open(BirdDialogComponent, {
      width: '70%',
      height: '90%',
      data: {
        'birdArray': this.birdsArray,
        'cardId': index,
      }
    })
  }

  Admin(role:any){
    if(role == 'Admin'){
      this.role = 'Normal';
    }else{
      const dialog = this.dialog.open(AdminLogin,{
        width: '50%',
        height:'50%',
        data: {
          'userName':'Aman',
          'password':'123',
        },
        disableClose: true
      }).afterClosed().subscribe((result)=>{
        console.log("Dialog closed with value: ",result);
        if(result){
          this.role = result;
        }
        
    })
      // this.role = 'Admin';
    }
  }

}
