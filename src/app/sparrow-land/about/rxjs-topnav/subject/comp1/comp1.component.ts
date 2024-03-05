import { Component } from '@angular/core';
import { SubjectService } from 'src/app/shared/services/subject.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {

  username:any;
  constructor(private _subject:SubjectService){
    this._subject.userName.subscribe(res => {
      this.username = res;
    })
  }

  onchange(uname:any){
    this._subject.userName.next(uname.value);
  }
}
