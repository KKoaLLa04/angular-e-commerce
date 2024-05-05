import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../interface/product.interface';

@Component({
  selector: 'app-seller-product-add',
  templateUrl: './seller-product-add.component.html',
  styleUrls: ['./seller-product-add.component.scss']
})
export class SellerProductAddComponent {
  message: string|undefined = '';
  constructor(private productService: ProductsService){}

  submit(data: product){
    this.productService.addProduct(data).subscribe((result) => {
      this.message = "Add product successfully";

      setTimeout(() => this.message = undefined, 3000);
    });
  }
}
