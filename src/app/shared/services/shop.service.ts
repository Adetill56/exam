import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttp } from './base.http';

@Injectable({
  providedIn: 'root'
})
export class ShopService extends BaseHttp {

  constructor(public http: HttpClient) {
    super(http, 'products');
  }
}
