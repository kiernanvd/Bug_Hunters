import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from './../shared/product-model';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { ProductService } from './../services/product.service';
import { getParentInjectorViewOffset } from '@angular/core/src/render3/util';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})

export class ReviewsComponent implements OnInit {

  // @Input() product: ProductModel;
  public products: ProductModel[];
  public selectedProduct: ProductModel;
  product: ProductModel;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log('id-');
    console.log(id);
    this.productService.getProducts().subscribe(data => this.products = data);

    this.route.params.pipe(
      switchMap((params: Params) =>
      this.productService.getProduct(+params['id']))).subscribe(data => {
       this.product = data;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
