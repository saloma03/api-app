import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  baseUrl:string = "https://fakestoreapi.com/products"

  constructor(private _HttpClient:HttpClient) { }

  getProduct() : Observable<Product[]>{
    return this._HttpClient.get<Product[]>(this.baseUrl).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError(error);
      })
    );
  }
}
