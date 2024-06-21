import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.scss'],
})
export class InformationFormComponent {

  public date: Date | null;

  @Output() nextClicked: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.date = null;
  }

  onNextClicked(): void {
    this.nextClicked.emit();
  }
}
