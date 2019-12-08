import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { ProductModel } from './../shared/product-model';
import { ProductItems } from './../shared/productitems';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  products: ProductModel[];
  selectedProduct: ProductModel;
  searchText = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  searchProducts() {

    let results = 0;

    for (let i = 0; i < this.products.length; i++) {
      if (this.searchText.toLowerCase() === this.products[i].name.toLowerCase()) {
        this.products = this.products.filter(data => data === this.products[i]);
        results++;
      }
    }

    if (results === 0) {
      this.products = this.products.filter(data => !data);
    }
  }

  onclick(inputProduct: ProductModel) {
    this.selectedProduct = inputProduct;
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(data => this.products = data);
  }
}
