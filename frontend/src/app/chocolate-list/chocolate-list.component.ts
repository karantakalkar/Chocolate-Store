import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service'
import { Chocolate } from '../chocolate'



@Component({
  selector: 'app-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.css']
})
export class ChocolateListComponent implements OnInit {

  chocolates: Chocolate[];

  getChocolates(): void {
    this.apiService.getChocolates()
        .subscribe(chocolates => this.chocolates = chocolates);
  }

  constructor( private apiService: APIService) { }

  ngOnInit() {
    this.getChocolates();
  }

}
