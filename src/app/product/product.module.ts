import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { ProductFormComponentComponent } from './product-form-component/product-form-component.component';


@NgModule({
  declarations: [
    ProductListComponentComponent,
    ProductFormComponentComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
