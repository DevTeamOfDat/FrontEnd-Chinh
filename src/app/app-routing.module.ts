import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ShopPageComponent } from './component/shop-page/shop-page.component';

const routesConfig: Routes = [
  { path: 'shop-page', component: ShopPageComponent },
  { path: 'home', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
