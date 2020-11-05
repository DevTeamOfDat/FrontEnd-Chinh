import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderAreaComponent } from './component/home/header-area/header-area.component';
import { ShopPageComponent } from './component/shop-page/shop-page.component';
import { SiteBrandingAreaComponent } from './component/home/site-branding-area/site-branding-area.component';
import { MainMenuAreaComponent } from './component/home/main-menu-area/main-menu-area.component';
import { SlideAreaComponent } from './component/home/slide-area/slide-area.component';
import { LatestProductsComponent } from './component/home/latest-products/latest-products.component';
import { BrandAreaComponent } from './component/home/brand-area/brand-area.component';
import { FooterComponent } from './component/home/footer/footer.component';
import { WidgetAreaComponent } from './component/home/widget-area/widget-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogLoginComponent } from './component/home/dialog-login/dialog-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderAreaComponent,
    ShopPageComponent,
    SiteBrandingAreaComponent,
    MainMenuAreaComponent,
    SlideAreaComponent,
    LatestProductsComponent,
    BrandAreaComponent,
    FooterComponent,
    WidgetAreaComponent,
    DialogLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  entryComponents: [DialogLoginComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
