import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Chocolate } from './chocolate';
import { map } from 'rxjs/operators';
import { CHOCOLATES } from './mock-choc'


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private chocolatesUrl = API_URL+'/chocolates';
  private chocolateUrl = API_URL+'api/chocolate';

  
  getChocolates(): Observable<Chocolate[]>{
      var response =this.http.get<Chocolate[]>(this.chocolatesUrl).pipe(map(response => response['chocolates']));
      // this.http.get('http://localhost:5000/chocolates').subscribe(responseData => console.log(responseData));
      return response;
  }

  getChocolate(name): Observable<Chocolate>{
    var response =this.http.get<Chocolate>(`${this.chocolatesUrl}/${name}`);
    return response
  }


  constructor(private http: HttpClient,) { }
}
