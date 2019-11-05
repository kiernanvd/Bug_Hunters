import { Injectable } from '@angular/core';
import { ProductModel } from './../shared/product-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'api/ProductItems';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productUrl);
  }

  getProduct(id: any): Observable<ProductModel> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<ProductModel>(url);
  }

}
