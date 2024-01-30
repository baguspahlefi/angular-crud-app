import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor( private httpClient: HttpClient ) { }

  getAllProducts(){
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  getProductsByCategory(category: string) {
    return this.httpClient.get<Product[]>(`http://localhost:3000/products?category=${category}`);
  }

  postProducts(data: Product): Observable<Product> {
    return this.httpClient.post<Product>(`http://localhost:3000/products`, data);
  }

  getProduct(id: number){
    return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }

  putProduct(data: Product){
    return this.httpClient.put<Product>(`http://localhost:3000/products/${data.id}`,data);
  }
  

  deleteProduct(id: number){
    return this.httpClient.delete<Product>(`http://localhost:3000/products/${id}`);
  }
}
