import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'app-base-lib';
import { PublicCartaComponent } from './public-carta/public-carta.component';


@NgModule({
  declarations: [
    PublicCartaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,    
    ReactiveFormsModule,
    RouterModule,
    FormsModule ,
    SharedComponentsModule
  ],
  exports: [
    PublicCartaComponent
  ],
  providers: [
  ],

})
export class SharedComponentsModuleLocal { }