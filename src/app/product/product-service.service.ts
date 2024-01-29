import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor( private httpClient: HttpClient ) { }

  getProducts(){
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }
}
