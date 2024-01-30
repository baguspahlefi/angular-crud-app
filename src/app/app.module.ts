
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponentComponent } from './product/product-list-component/product-list-component.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponentComponent } from './product/product-form-component/product-form-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponentComponent } from './product/product-edit-component/product-edit-component.component';
import { HeaderComponent } from './product/header/header.component';
import { SidebarComponent } from './product/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductFormComponentComponent,
    ProductListComponentComponent,
    ProductEditComponentComponent,
    HeaderComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
