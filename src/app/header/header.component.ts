import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuType: string = "default";
  sellerName: string = "";
  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    this.router.events.subscribe((value: any) => {
      if(value.url){
        if(localStorage.getItem('seller') && value.url.includes('seller')){
          this.menuType = "seller";
          let localStore = localStorage.getItem('seller');
          let localData = localStore && JSON.parse(localStore)[0];
          this.sellerName = localData.name;
        }else{
          this.menuType = 'default';
        }
      }
    })
  }

  logOut(){
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
}
