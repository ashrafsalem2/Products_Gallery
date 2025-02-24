import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient: HttpClient) { }
  //https://fakestoreapi.com/products
  getAllProduct(): Observable<any> {
    return this._HttpClient.get(`https://fakestoreapi.com/products`)
  }

  //https://fakestoreapi.com/products/1

  getSpecificProduct(id: number): Observable<any> {
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`)
  }

}
