import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerProductAddComponent } from './seller-product-add/seller-product-add.component';
import { SellerProductUpdateComponent } from './seller-product-update/seller-product-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "seller-auth",
    component: SellerAuthComponent
  },
  {
    path: "seller-home",
    component: SellerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "seller-product-add",
    component: SellerProductAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "seller-product-update/:id",
    component: SellerProductUpdateComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
