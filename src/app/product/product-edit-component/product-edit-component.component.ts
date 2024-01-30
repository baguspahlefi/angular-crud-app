import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit-component',
  templateUrl: './product-edit-component.component.html',
  styleUrls: ['./product-edit-component.component.scss']
})
export class ProductEditComponentComponent implements OnInit{

  constructor(
    private productServices: ProductServiceService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  formData : Product  = {
    id : 0,
    name: '',
    description: '',
    price: 0,
    category: '',
    images:''
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
        let id = Number(param.get('id'));
        this.getById(id)
      })
  }

  getById(id:number){
    this.productServices.getProduct(id).subscribe((data)=>{
      this.formData = data;
      console.log(this.formData);
    })
  }

  putProduct(){
    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('description', this.formData.description);
    formData.append('price', this.formData.price.toString());
    formData.append('category', this.formData.category);
    formData.append('images', this.formData.images);
    
    this.productServices.putProduct(this.formData).subscribe({
      next:(data)=>{
        this.router.navigate(["products/home"])
      },
      error: (er) => {
        console.log(er)
      }
    })
  }
}
