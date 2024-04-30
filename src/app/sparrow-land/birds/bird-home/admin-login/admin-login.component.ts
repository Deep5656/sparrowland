import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component(
    {
        selector: 'admin-login',
        templateUrl: 'admin-login.component.html',
        styleUrls: ['admin-login.component.scss']
    }
)
export class AdminLogin implements OnInit {

    form: FormGroup = new FormGroup<any>({});
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialogRef<AdminLogin>, private fb:FormBuilder) { }
    ngOnInit(): void {
        this.form = this.fb.group({
            'userDetails' : new FormGroup({
                'userName': new FormControl(),
                'password': new FormControl()
            })
        })
    }

    close() {
        this.dialog.close();
    }

    login() {
        let role:any;
        
        console.log("this.form",this.form);
        if(this.form.value.userDetails.userName === "Aman" && this.form.value.userDetails.password === "123"){
            role = "Admin";
            this.dialog.close(role);
            alert("successfull login !!")
        }else{
            role = "Normal";
            this.dialog.close(role);
            alert("Entered Wrong credentials !!");
        }
        
    }
}