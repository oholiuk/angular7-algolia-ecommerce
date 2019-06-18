import { NgModule } from '@angular/core';
import { NgAisModule, NgAisInstantSearchModule } from 'angular-instantsearch';

import { AppComponent } from './app.component';
import { SharedModule } from './_shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './pages/product-list.component';
import { ProductComponent } from './components/product.component';
import { ProductDetailComponent } from './pages/product-detail.component';
import { CartComponent } from './pages/cart.component';
import { CartButtonComponent } from './components/cart-button.component';
import { MessageComponent } from './components/message.component';
import { PayPalComponent } from './components/paypal.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartButtonComponent,
    PayPalComponent,
    ProductComponent,
    MessageComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    NgAisInstantSearchModule.forRoot(),
    NgAisModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
