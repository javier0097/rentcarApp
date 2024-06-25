import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AccountService} from "../service/account.service";
import {AccountResponse} from "../interface/account";

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  accountId: string | null;
  name?: string;
  lastName?: string;
  phone?: string;
  email?: string;

  constructor(private accountService: AccountService, private route: ActivatedRoute) {
    this.accountId = null;
  }

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('id');
    if (this.accountId){
      this.accountService.getAccount(this.accountId).subscribe(
        (accountResponse: AccountResponse) => {
          this.name = accountResponse.names;
          this.lastName = accountResponse.lastName;
          this.phone = accountResponse.phone;
          this.email = accountResponse.email;
        }
      );
    }
  }

}
