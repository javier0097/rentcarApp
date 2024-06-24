import {Component, EventEmitter, Output} from '@angular/core';
import {Account} from "../../interface/account";

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.scss'],
})
export class InformationFormComponent {

  public names: string;
  public lastName: string;
  public birthDate: Date | null;
  public email: string;
  public phone: string;
  public password: string;

  @Output() nextClicked: EventEmitter<void> = new EventEmitter();
  @Output() data: EventEmitter<Account> = new EventEmitter<Account>();

  constructor() {
    this.birthDate = null;
    this.names = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.password = '';
  }

  onNextClicked(): void {
    this.sendData();
    this.nextClicked.emit();
  }

  sendData(): void {
    if (this.birthDate){
      this.data.emit({
        names: this.names,
        birthDate: this.birthDate,
        email: this.email,
        lastName: this.lastName,
        password: this.password,
        phone: this.phone
      });
    }
  }
}
