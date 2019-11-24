import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { ProductModel } from './../shared/product-model';
import { ProductItems } from './../shared/productitems';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  products: ProductModel[];
  selectedProduct: ProductModel;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  onclick(inputProduct: ProductModel) {
    this.selectedProduct = inputProduct;
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(data => this.products = data);
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}
