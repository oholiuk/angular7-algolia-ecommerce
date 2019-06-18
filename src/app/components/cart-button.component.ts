import { Component, AfterViewChecked, Input, OnInit } from '@angular/core';
import { CartService } from '../_core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html'
})
export class CartButtonComponent implements OnInit {
  quantity: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService) {   
  }

    ngOnInit(): void {
      this.cartService.itemsInCart.subscribe(val => {
        console.log('itemsInCart: ' + val);
        this.quantity = val;
      });
    }

    goToCart(): void {
        this.router.navigate(['/cart']);
    }
}
