import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopEditComponent } from './shop-edit/shop-edit.component';
import { ShopComponent } from './shop.component';



@NgModule({
  declarations: [ShopListComponent, ShopEditComponent, ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ReactiveFormsModule,

  ]
})
export class ShopModule { }
