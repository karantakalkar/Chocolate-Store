import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChocolateListComponent } from './chocolate-list/chocolate-list.component';
import { ChocolateDetailsComponent } from './chocolate-details/chocolate-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChocolateListComponent,
    ChocolateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
