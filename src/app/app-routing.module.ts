import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { MessageComponent } from './pages/message/message.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { DetailComponent } from './pages/detail/detail.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'message', component: MessageComponent },
  { path: 'commandes', component: OrdersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'food/:id', component: DetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
