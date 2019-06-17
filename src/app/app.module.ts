import { NgModule } from '@angular/core';
import { NgAisModule, NgAisInstantSearchModule } from 'angular-instantsearch';

import { AppComponent } from './app.component';
import { SharedModule } from './_shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './pages/product-list.component';
import { ProductComponent } from './components/product.component';
import { ProductDetailComponent } from './components/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
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
