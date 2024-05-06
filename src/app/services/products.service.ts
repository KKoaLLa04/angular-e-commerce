import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  addProduct(data: product){
    return this.http.post('http://localhost:3000/products', data);
  }

  productList(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  delete(id: string){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  
  productDetail(id: string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(data: product){
    return this.http.patch(`http://localhost:3000/products/${data.id}`, data);
  }
}