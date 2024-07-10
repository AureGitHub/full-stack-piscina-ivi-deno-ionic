import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SharedComponentsModuleLocal } from 'src/app/components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedComponentsModuleLocal

  ],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
