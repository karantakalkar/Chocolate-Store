import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.css']
})
export class ChocolateListComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit() {
  }

}
