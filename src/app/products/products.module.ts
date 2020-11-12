import { NgModule } from '@angular/core'; 
import { ShareModule } from '../share/share.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterProductListPipe } from './filters/filter-product-list.pipe';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent, 
    FilterProductListPipe
  ],
  imports: [ 
    ShareModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
