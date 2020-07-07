import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopEditComponent } from './shop-edit/shop-edit.component';


const routes: Routes = [
  {
    path: '', component: ShopComponent, children: [
      { path: '', component: ShopListComponent },
      { path: 'item', component: ShopEditComponent },
      { path: 'item/:id', component: ShopEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
