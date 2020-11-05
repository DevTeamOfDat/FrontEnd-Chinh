import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ShopPageComponent } from './component/shop-page/shop-page.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { CardComponent } from './component/card/card.component';
const routesConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop-page', component: ShopPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'single-product', component: SingleProductComponent },
  { path: 'cart', component: CardComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
