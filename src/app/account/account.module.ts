import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AccountPageRoutingModule,
        NgOptimizedImage
    ],
  declarations: [AccountPage]
})
export class AccountPageModule {}
