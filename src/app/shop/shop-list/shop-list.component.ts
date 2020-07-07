import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/list.model';

import { isNullOrUndefined } from 'util';
import { ShopService } from 'src/app/shared/services/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  products: Product[] = [];
  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      let products = this.shopService.getAll();
      this.products = isNullOrUndefined(products) ? [] : await products;
    } catch (error) {
      console.error(error);
    }
  }

  onAdd() {
    this.router.navigate([this.router.url, 'item']);
  }
  onEdit(id: number) {
    this.router.navigate([this.router.url, 'item', id]);
  }

  async onDelete(id: number) {
    try {
      await this.shopService.deleteOneById(id);
    } catch (error) {
      console.error(error);
    }
    this.getData();
  }

  checkStatus(status: string) {
    switch (status) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        break;
    }
  }

  async onChangeStatus(product: Product) {
    product.status = 'true';
    await this.shopService.putOneById(product.id, product);
    this.getData();
  }
}
