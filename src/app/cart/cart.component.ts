import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductModel } from '../shared/product-model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total;
items: ProductModel[];
selectedProduct: ProductModel;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getItems()
            .subscribe(value => {
                this.total = value;
            })
            this.items=this.cartService.getCartItems();
  }


  removeCart (item: ProductModel) {
    this.items = this.items.filter(data => data !== item);
    this.cartService
    .removeCart(item.id)
    .subscribe();
  }

  onClick(inputProduct: ProductModel) {
    this.selectedProduct = inputProduct;
  }


  increase() {
    this.cartService.updateCartItems(this.total+1);
}

decrease() {
    this.cartService.updateCartItems(this.total-1);
}
}
