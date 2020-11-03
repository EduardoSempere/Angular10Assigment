import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pageTitle: string = "List Product";
  listFilter: string = "";
  products: any[] = [
    {
      "productId": 1,
      "productName": "Hammer",
      "price": 20,
      "units": 20,
      "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51Gyo1n4TYL._AC_SL1200_.jpg"
    }, {
      "productId": 2,
      "productName": "Hover",
      "price": 20,
      "units": 20,
      "imageUrl":"https://images.homedepot-static.com/productImages/133d08ae-59d5-4c28-9c2f-e1838715ea41/svn/ryobi-power-drills-p215k-64_1000.jpg"
    }, {
      "productId": 3,
      "productName": "Circular Saw",
      "price": 40,
      "units": 50,
      "imageUrl":"https://images.homedepot-static.com/productImages/69046f8c-a1a4-4464-9852-ba7573542bc2/svn/dewalt-circular-saws-dcs571b-64_600.jpg"
    },{
      "productId": 4,
      "productName": "Circular Saw",
      "price": 40,
      "units": 50,
      "imageUrl":"https://www.rockler.com/media/catalog/product/cache/5c5edcf249a74e99ece620285918bb9b/5/1/51006-01-1000.jpg"
    }
    
  ];

  submitButton(){
    alert("Sempere");
  }

  showDetails(product: any){
    console.log(product);
    alert(product.productName);
  }

}
