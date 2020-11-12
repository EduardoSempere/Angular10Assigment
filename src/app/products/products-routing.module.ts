import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsDetailGuard } from './guard/products-detail.guard';  

const routes: Routes = [
  
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', canActivate: [ProductsDetailGuard] , component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
