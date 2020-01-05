import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service'
import { CartService } from '../cart.service';
import { Chocolate } from '../chocolate'

@Component({
  selector: 'app-chocolate-details',
  templateUrl: './chocolate-details.component.html',
  styleUrls: ['./chocolate-details.component.css']
})
export class ChocolateDetailsComponent implements OnInit {

  chocolate;
  chocolates: Chocolate[];

  addToCart(chocolate){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(chocolate);
  }

  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService,
    private apiService: APIService,
    ) { }

  ngOnInit() {
    this.apiService.getChocolates()
        .subscribe(chocolates => this.chocolates = chocolates);
    this.route.paramMap.subscribe(params => {
      this.chocolate = this.chocolates[+params.get('productId')];
    });
  }

}
