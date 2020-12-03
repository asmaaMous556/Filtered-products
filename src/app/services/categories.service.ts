import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url:string= 'https://perla-be-2.herokuapp.com/api/v1/categories'
  constructor(private http:HttpClient) { }

  getCategories():Observable<category[]>{
return this.http.get<category[]>(this.url)
  }

}
