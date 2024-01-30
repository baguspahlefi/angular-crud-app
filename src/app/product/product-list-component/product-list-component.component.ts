import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { MatSelectChange } from '@angular/material/select';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss'],
})
export class ProductListComponentComponent implements OnInit {
  allProducts: Product[] = [];
  selectedCategory: string | undefined;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  constructor(private productServices: ProductServiceService) {}

  ngOnInit(): void {
    this.productServices.getAllProducts().subscribe((data) => {
      this.allProducts = data;
      console.log(this.allProducts);
    });
  }

  getProductsByCategory(event: MatSelectChange) {
    const selectedValue = event.value;
    if (selectedValue === 'all') {
      this.productServices.getAllProducts().subscribe((data) => {
        this.allProducts = data;
        console.log(this.allProducts);
      });
    } else {
      this.productServices.getProductsByCategory(selectedValue).subscribe((data) => {
        this.allProducts = data;
        console.log(this.allProducts);
      });
    }
    
  }

  deleteProducts(id: number) {
    this.productServices.deleteProduct(id).subscribe({
      next: (data) => {
        this.allProducts = this.allProducts.filter((_) => _.id != id);
      },
    });
  }
}
