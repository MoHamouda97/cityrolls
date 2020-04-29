import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './../components/reusable/navbar/navbar.component';
import { HomeComponent } from './../components/public/home/home.component';
import { SliderComponent } from 'src/components/public/slider/slider.component';
import { CtaComponent } from './../components/public/cta/cta.component';
import { CategoriesComponent } from './../components/public/categories/categories.component';
import { ProductCardComponent } from 'src/components/reusable/product-card/product-card.component';
import { OfferComponent } from './../components/public/offer/offer.component';
import { AddCartBtnComponent } from './../components/reusable/add-cart-btn/add-cart-btn.component';
import { QualityComponent } from './../components/public/quality/quality.component';
import { LoginComponent } from './../components/public/login/login.component';
import { GmapComponent } from './../components/public/gmap/gmap.component';
import { ProductsComponent } from './../components/public/products/products.component';
import { ContactComponent } from './../components/public/contact/contact.component';
import { JobsComponent } from './../components/public/jobs/jobs.component';
import { CartComponent } from './../components/public/cart/cart.component';
import { FooterComponent } from './../components/reusable/footer/footer.component';

import { MainService } from './../services/main/main.service';
import { ShoppingCartService } from './../services/shopping-cart/shopping-cart.service';
import { AuthService } from 'src/services/auth/auth.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SliderComponent,
    CtaComponent,
    CategoriesComponent,
    ProductCardComponent,
    OfferComponent,
    AddCartBtnComponent,
    QualityComponent,
    LoginComponent,
    GmapComponent,
    ProductsComponent,
    ContactComponent,
    JobsComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRippleModule,
    NgZorroAntdModule,
    CarouselModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'jobs',
        component: JobsComponent
      },     
      {
        path: 'contact',
        component: ContactComponent
      },     
      {
        path: 'cart',
        component: CartComponent
      }
    ]) 
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    MainService,
    ShoppingCartService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
