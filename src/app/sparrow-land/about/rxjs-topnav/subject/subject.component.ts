import { Component } from '@angular/core';
import { SubjectService } from 'src/app/shared/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  username:any;

  constructor(private _subject:SubjectService){
    this._subject.userName.subscribe(res => {
      this.username = res;
    })
  }
}
