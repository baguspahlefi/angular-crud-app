import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  allProducts: Product[] = [];
  constructor(private productServices: ProductServiceService){}

  ngOnInit(): void {
      this.productServices.getProducts().subscribe((data)=>{
        this.allProducts = data;
        console.log(this.allProducts);
      })
  }
}
