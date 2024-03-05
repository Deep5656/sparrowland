import { Component } from '@angular/core';
import { SubjectService } from 'src/app/shared/services/subject.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {

  username:any;

  constructor(private _subject:SubjectService){
    this._subject.userName.subscribe(res => {
      this.username = res;
    })
  }

  onChange(uname:any){
    this._subject.userName.next(uname.value);
  }
}
