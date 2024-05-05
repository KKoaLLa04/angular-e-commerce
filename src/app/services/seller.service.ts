import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { login, signUp } from '../interface/sign-up.interface';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(
    private http:HttpClient,
    private router: Router
    ) { }
  isSellerAuth = new BehaviorSubject<boolean>(false);
  isLoginErr = new EventEmitter<boolean>(false);
  signUpSeller(data: signUp){
    this.http.post('http://localhost:3000/seller', data, {observe: 'response'}).subscribe((result) => {
    this.isSellerAuth.next(true);
    localStorage.setItem('seller', JSON.stringify(result.body));
    this.router.navigate(['seller-home']);
    return this.isSellerAuth;
  })
  }

  isReloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerAuth.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  loginSeller(data: login){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, {observe: 'response'}).subscribe((result: any) => {
      console.log(result);
      if(result && result.body && result.body.length){
        this.isSellerAuth.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }else{
        this.isLoginErr.emit(true);
      }
    })
  }
}