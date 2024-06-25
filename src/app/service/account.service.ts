import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account, AccountResponse} from "../interface/account";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public saveAccount(
    account: Account
  ): Observable<AccountResponse> {
    return this.http.post<AccountResponse>(
      '/local/accounts',
      {
        names: account.names,
        lastName: account.lastName,
        email: account.email,
        phone: account.phone,
        password: account.password,
        birthDate: account.birthDate
      },
    );
  }


}
