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
    });
    this.items = this.cartService.getCartItems();

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].quantity = 1;
    }
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

  isDisabled(item: ProductModel) {
    if (item.quantity === 1) {
      return true;
    }
  }

  increase(item: ProductModel) {
    item.quantity++;
  }

  decrease(item: ProductModel) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }
}
