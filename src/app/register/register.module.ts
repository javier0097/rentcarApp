import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import {InformationFormComponent} from "./information-form/information-form.component";
import {PhotoUploaderComponent} from "./photo-uploader/photo-uploader.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage, InformationFormComponent, PhotoUploaderComponent]
})
export class RegisterPageModule {}
