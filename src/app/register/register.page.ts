import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  documentTitle: string = 'Identity Document';
  selfieTitle: string = 'Selfie';
  documentDescription: string = 'Please upload a photo of your identity document.';
  selfieDescription: string = 'Please take a selfie to complete your registration.';
  documentSubtitle: string = 'Upload Document';
  selfieSubtitle: string = 'Upload Selfie';

  step: number = 1;

  constructor() { }

  changePreviousView(): void {
    if (this.step > 1) {
      this.step -= 1;
    }
  }

  changeNextView():void {
    if (this.step < 3) {
      this.step += 1;
    }
  }
}
