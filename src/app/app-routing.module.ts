import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponentComponent } from './product/product-list-component/product-list-component.component';

const routes: Routes = [
  {path: 'products/home' , component:ProductListComponentComponent},
  {path: 'products', redirectTo:'products/home', pathMatch:'full'},
  {path: '', redirectTo:'products/home', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
