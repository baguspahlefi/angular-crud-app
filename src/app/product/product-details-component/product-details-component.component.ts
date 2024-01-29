import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-details-component',
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.scss']
})
export class ProductDetailsComponentComponent implements OnInit{
  constructor(
    private productServices: ProductServiceService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  formData : Product = {
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
}
