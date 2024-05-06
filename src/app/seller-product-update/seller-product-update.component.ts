import { Component, OnInit } from '@angular/core';
import { product } from '../interface/product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-seller-product-update',
  templateUrl: './seller-product-update.component.html',
  styleUrls: ['./seller-product-update.component.scss']
})
export class SellerProductUpdateComponent implements OnInit{
  productDetail: product | undefined;
  message: string | undefined;
  constructor(
    private route: ActivatedRoute, 
    private product: ProductsService,
    ){}

  ngOnInit(): void {
      let productId = this.route.snapshot.params['id'];
      this.product.productDetail(productId).subscribe((result) => {
        this.productDetail = result;
      })
    }

  submit(data: product){
      if(this.productDetail){
        data.id = this.productDetail.id

        this.product.updateProduct(data).subscribe((result) => {
          if(result){
            this.message = "Product has updated";
          }
        });
      }else{
        this.message = "Has some errors";
      }
      setTimeout(() => this.message = undefined, 3000);
  }
}