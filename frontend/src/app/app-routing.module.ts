import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChocolateListComponent } from './chocolate-list/chocolate-list.component';
import { ChocolateDetailsComponent } from './chocolate-details/chocolate-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: ChocolateListComponent },
  { path: 'chocolates/:chocolateId', component: ChocolateDetailsComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
