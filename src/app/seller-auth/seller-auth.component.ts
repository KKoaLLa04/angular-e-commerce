import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { login, signUp } from '../interface/sign-up.interface';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent {

  constructor(private sellerService: SellerService){}
  showLogin: boolean = false;
  loginErr: string = "";
  ngOnInit(): void {
    this.sellerService.isReloadSeller();
  }
  signUp(data: signUp): void{
    this.sellerService.signUpSeller(data);
  }
  
  login(data: login): void{
    this.loginErr = "";
    if(data.email && data.password){
      this.sellerService.loginSeller(data)
    }else{
      this.loginErr = "Email or password must have ben fullfill";
    }
    this.sellerService.isLoginErr.subscribe((error) => {
      if(error){
        this.loginErr = "Email or password was wrong";
      }
    })
  }
  
  openLogin(){
    this.showLogin = true;
  }

  openSignUp(){
    this.showLogin = false;
  }
}
