import { Injectable } from '@angular/core';
import { ProductModel } from '../shared/product-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private totalItems: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  items = [];
  private productUrl = 'api/Productitems';

  constructor(private http: HttpClient) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.totalItems.asObservable();
  }
  getCartItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeCart (id: any): Observable<ProductModel> {
    const url = `${this.productUrl}/${id}`;
    return this.http.delete<ProductModel>(url, httpOptions);
  }
}
