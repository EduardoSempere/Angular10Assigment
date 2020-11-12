import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from '../model/iproducts';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService: ProductService,
              private activeRouter: ActivatedRoute,
              private router: Router) { }

  id: number;
  product: Iproducts;
  ngOnInit(): void {
    this.id = parseInt(this.activeRouter.snapshot.paramMap.get("id"));
    this.productService.getProduct(this.id).subscribe({
      next: data => this.product  = data,
      error: err => err
    });
  }

  goBack(){
    this.router.navigate(['/products']);
  }

}
