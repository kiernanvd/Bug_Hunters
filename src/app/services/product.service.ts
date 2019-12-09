import { Injectable } from '@angular/core';
import { ProductModel } from './../shared/product-model';
// import { ContactModel } from './../shared/contact-model';
// import { LoginModel } from './../shared/login-model';
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

  // addContact (contact: ContactModel): Observable<any> {
  //   console.log('new contact -');

  //   console.log(contact);
  //   return this.http.post<ContactModel>(this.productUrl, contact, httpOptions);
  // }

  // addLogin(login: LoginModel): Observable<any> {
  //   console.log('new login -');

  //   console.log(login);
  //   return this.http.post<LoginModel>(this.productUrl, login, httpOptions);
  // }

}
