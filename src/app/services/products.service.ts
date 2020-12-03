import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { doc } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string='https://perla-be-2.herokuapp.com/api/v1/products'
  constructor(private http: HttpClient) { }

  getProducts():Observable<doc>{
    return this.http.get<doc>(this.url);
  }

}
