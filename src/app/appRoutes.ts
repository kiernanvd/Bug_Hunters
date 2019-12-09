import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TermsComponent } from './terms/terms.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'product',  component: ProductListComponent },
  { path: 'reviews/:id',  component: ReviewsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
