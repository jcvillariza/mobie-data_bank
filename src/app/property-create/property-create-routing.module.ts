import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyCreatePage } from './property-create.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyCreatePageRoutingModule {}
