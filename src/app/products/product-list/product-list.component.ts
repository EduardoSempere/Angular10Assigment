import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../model/iproducts';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe ({
      next: data =>  this.products = data,
      error: err => this.msgError = err
    });
  }

  pageTitle: string = "List Products";
  listFilter: string = "";
  products: Iproducts[];
  showImage = false;
  msgError: string = "";

  showImages(){
    this.showImage = !this.showImage;
  }

  submitButton(){
    alert("Sempere");
  }

  showDetails(product: any){
    console.log(product);
    alert(product.productName);
  }

  onRatingClick(msg: string) : void {
    this.pageTitle = msg;

  }

}
