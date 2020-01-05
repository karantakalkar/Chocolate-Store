import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { element } from '@angular/core/src/render3';
import { FormBuilder } from '@angular/forms';
import { Checkout } from '../checkout'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items;
  checkout = new Checkout('', '');

  buyNow(){
    window.alert(`Thanks`)
    this.items = this.cartService.clearCart();
    this.checkout = new Checkout('','');
  }

  constructor (
    private cartService: CartService,
    ) {
      this.items = this.cartService.getItems();
     }
  

}
