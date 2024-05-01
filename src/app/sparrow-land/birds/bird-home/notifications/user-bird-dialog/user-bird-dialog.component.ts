import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector:'user-bird-dialog',
    templateUrl:'user-bird-dialog.component.html',
    styleUrls:['user-bird-dialog.component.scss']
})
export class userBirdDialogComponent implements OnInit{

    editMode: boolean = false;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog:MatDialog,private dialogRef:MatDialogRef<userBirdDialogComponent>,private dataService:DataService){}
    ngOnInit(): void {
        console.log("data",this.data);
        
    }


    close(){
        this.dialogRef.close();
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
    
        if (!this.editMode) {
            this.saveChanges();
        }
    }

    saveChanges() {
        console.log('Saving changes:', this.data);
        this.saveEditedChanges(this.data);
    }

    saveEditedChanges(payload:any){
        this.dataService.updateUserBird(payload).subscribe((res)=>{
            console.log(res);
            
        })
    }
}