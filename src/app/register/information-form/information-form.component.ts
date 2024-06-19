import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.scss'],
})
export class InformationFormComponent  implements OnInit {

  public date: Date | null;
  constructor() {
    this.date = null;
  }

  ngOnInit() {}

}
