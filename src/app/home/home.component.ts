import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';
import { ProductService } from '../services/product.service';
// import { ContactModel } from '../shared/contact-model';
// import { LoginModel } from '../shared/login-model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // contact: ContactModel;
  items: Product[] = [];

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,

    private store: Store<{ items: Product[]; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => (this.items = data.items));
  }



  ngOnInit() {
    this.store.dispatch(new GetItems());
  }
}
