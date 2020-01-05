import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Chocolate } from './chocolate'
import { CHOCOLATES } from './mock-choc'


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private chocolatesUrl = 'api/chocolates';
  private chocolateUrl = 'api/chocolate';

  
  getChocolates(): Observable<Chocolate[]>{
      return of(CHOCOLATES)
  }

  constructor(private http: HttpClient,) { }
}
