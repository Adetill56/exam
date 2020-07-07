import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from 'src/app/shared/services/shop.service';
import { Product, Status } from 'src/app/shared/models/list.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit {

  id: number;
  status = Status;
  productForm: FormGroup;
  product: Product;

  constructor(private activateRoute: ActivatedRoute, private shopService: ShopService, private router: Router) {
    this.activateRoute.params.subscribe((params) => {
      if (!isNullOrUndefined(params.id)) {
        this.id = +params.id;
      } else {
        this.id = null;
      }
    });
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      count: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
    });

    this.getData();
  }

  async getData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let product = this.shopService.getOneById(this.id);
        this.product = await product;
      } catch (error) {
        console.error(error);
      }
    }
    this.productForm.patchValue({
      name: this.product.name,
      count: this.product.count,
      status: this.product.status
    });
  }

  async onSave() {
    let data = this.productForm.value;
    if (!isNullOrUndefined(this.id)) {
      try {
        await this.shopService.putOneById(this.id, data);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        let res = await this.shopService.postOne(data);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      } catch (error) {
        console.error(error);
      }
    }

  }

  async onDelete() {
    try {
      await this.shopService.deleteOneById(this.id);
      this.router.navigate(['/products']);
    } catch (error) {
      console.error(error);
    }
  }

}
