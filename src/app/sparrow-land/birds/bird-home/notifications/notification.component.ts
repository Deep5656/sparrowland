import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DataService } from "src/app/shared/services/data.service";
import { BirdDialogComponent } from "../bird-dialog/bird-dialog.component";
import { userBirdDialogComponent } from "./user-bird-dialog/user-bird-dialog.component";

@Component({
    selector:'notofication',
    templateUrl:'notification.component.html',
    styleUrls:['notification.component.scss']
})
export class NotificationComponent implements OnInit{

    userBirdArr:any;

    constructor(private dataService:DataService,public dialogRef: MatDialogRef<NotificationComponent>,public dialog:MatDialog){}
    ngOnInit(): void {
        this.getAllNotifications();
    }

    close(){
        this.dialogRef.close();
    }

    getAllNotifications(){
        this.dataService.getAllNotifications().subscribe((res)=>{
            console.log("resf",res);
            this.userBirdArr = res;
        })
    }

    Reject(index:any){
        console.log("index",index);
        this.dataService.rejectUserBird(index).subscribe((res)=>{
            console.log(res);
            this.getAllNotifications();
        })
    }

    showMore(index: any) {
        const dialog = this.dialog.open(userBirdDialogComponent, {
          width: '70%',
          height: '90%',
          data: index
        })
      }

}