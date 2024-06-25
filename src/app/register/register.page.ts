import { Component } from '@angular/core';
import {Account, AccountResponse} from "../interface/account";
import {AccountService} from "../service/account.service";
import {Router} from "@angular/router";

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
  accountData?: Account;

  step: number = 1;

  constructor(private accountService: AccountService, private router: Router) {}

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

  updateData(data: Account): void {
    this.accountData = data;
  }

  saveData(): void {
    if (this.accountData){
      this.accountService.saveAccount(this.accountData).subscribe((accountResponse: AccountResponse) => {
        console.log("accountResponse", accountResponse);
        this.router.navigate(['/account/'+accountResponse.id]);
      });
    }
  }
}
