import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyUpdatePageRoutingModule } from './property-update-routing.module';

import { PropertyUpdatePage } from './property-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyUpdatePageRoutingModule
  ],
  declarations: [PropertyUpdatePage]
})
export class PropertyUpdatePageModule {}
