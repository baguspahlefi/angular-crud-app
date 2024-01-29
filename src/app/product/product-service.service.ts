import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor( private httpClient: HttpClient ) { }

  getProducts(){
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  postProducts(data: Product): Observable<Product> {
    return this.httpClient.post<Product>(`http://localhost:3000/products`, data);
  }
}
