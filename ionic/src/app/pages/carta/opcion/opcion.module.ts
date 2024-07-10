import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedComponentsModule } from 'app-base-lib';
import { RouterModule, Routes } from '@angular/router';
import { OpcionPage } from './opcion.page';


const routes: Routes = [
  {
    path: '',
    component: OpcionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
  ],
  declarations: [OpcionPage]
})
export class OpcionPagePageModule { }
