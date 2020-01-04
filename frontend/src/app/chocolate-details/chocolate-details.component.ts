import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-chocolate-details',
  templateUrl: './chocolate-details.component.html',
  styleUrls: ['./chocolate-details.component.css']
})
export class ChocolateDetailsComponent implements OnInit {

  product;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
