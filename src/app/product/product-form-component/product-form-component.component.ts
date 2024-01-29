import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-form-component',
  templateUrl: './product-form-component.component.html',
  styleUrls: ['./product-form-component.component.scss']
})
export class ProductFormComponentComponent {
  constructor( private productService: ProductServiceService, private router: Router) {}

  formData : Product = {
    id : 0,
    name: '',
    description: '',
    price: 0,
    category: '',
    images:''
  }

  onFileChange(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.formData.images = files[0]; // Assign the selected file to formData
    }
  }

  postData(){

    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('description', this.formData.description);
    formData.append('price', this.formData.price.toString());
    formData.append('category', this.formData.category);
    formData.append('images', this.formData.images);
    
    this.productService.postProducts(this.formData).subscribe({
      next:(data)=>{
        this.router.navigate(["products/home"])
      },
      error: (er) => {
        console.log(er)
      }
    })
  }
}
