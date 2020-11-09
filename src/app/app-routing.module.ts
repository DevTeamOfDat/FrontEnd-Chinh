import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';



import { CardComponent } from './component/card/card.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { VoucherComponent } from './component/voucher/voucher.component';
const routesConfig: Routes = [
  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },
  {path: 'voucher' , component: VoucherComponent},

  { path: 'cart', component: CardComponent },
  {path: 'login' , component:SignInComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
