import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyUpdatePage } from './property-update.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyUpdatePageRoutingModule {}
