import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderAreaComponent } from './component/home/header-area/header-area.component';

import { SiteBrandingAreaComponent } from './component/home/site-branding-area/site-branding-area.component';
import { MainMenuAreaComponent } from './component/home/main-menu-area/main-menu-area.component';
import { SlideAreaComponent } from './component/home/slide-area/slide-area.component';
import { LatestProductsComponent } from './component/home/latest-products/latest-products.component';
import { BrandAreaComponent } from './component/home/brand-area/brand-area.component';
import { FooterComponent } from './component/home/footer/footer.component';
import { WidgetAreaComponent } from './component/home/widget-area/widget-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';



import { CardComponent } from './component/card/card.component';
import { PromoAreaComponent } from './component/home/promo-area/promo-area.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { NewsComponent } from './component/home/news/news.component';
import { VoucherComponent } from './component/voucher/voucher.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderAreaComponent,
  
    SiteBrandingAreaComponent,
    MainMenuAreaComponent,
    SlideAreaComponent,
    LatestProductsComponent,
    BrandAreaComponent,
    FooterComponent,
    WidgetAreaComponent,


  
    CardComponent,
    PromoAreaComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    NewsComponent,
    VoucherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  entryComponents: [SignInComponent, SignUpComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
