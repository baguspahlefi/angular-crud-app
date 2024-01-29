import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponentComponent } from './product/product-list-component/product-list-component.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponentComponent } from './product/product-form-component/product-form-component.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent, pathMatch:'full'},
  {path: 'products/home' , component:ProductListComponentComponent},
  {path: 'products', redirectTo:'products/home', pathMatch:'full'},
  {path: 'create', component:ProductFormComponentComponent, pathMatch:'full'},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
