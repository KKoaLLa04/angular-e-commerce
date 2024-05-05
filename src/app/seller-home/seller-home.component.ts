import { Component, OnInit } from '@angular/core';
import { product } from '../interface/product.interface';
import { ProductsService } from '../services/products.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit{
  productList: product[]|undefined;
  message: string | undefined;
  icon = faTrash
  editIcon = faEdit
  constructor(private productService: ProductsService){}
  ngOnInit(): void {
    this.productListApi();
  }

  delete(id: string){
    this.productService.delete(id).subscribe((result) => {
      if(result){
        this.message = "Delete product successfully"

        setTimeout(() => this.message = undefined , 3000);
        this.productListApi();
      }
    })
  }

  productListApi(){
    this.productService.productList().subscribe((result) => {
      this.productList = result
    })
  }
}
