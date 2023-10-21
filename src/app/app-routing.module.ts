import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CartComponent } from "./pages/cart/cart.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { DetailComponent } from "./pages/detail/detail.component";
import { PaymentComponent } from "./pages/payment/payment.component";
import { TrackComponent } from "./pages/track/track.component";
import { FavorisComponent } from "./pages/favoris/favoris.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "home", component: HomeComponent, data: { animationState: 0 } },
      { path: "commandes", component: OrdersComponent, data: { animationState: 1 } },
      { path: "favoris", component: FavorisComponent, data: { animationState: 2 } },
      { path: "food/:id", component: DetailComponent, data: { animationState: 3 } },
      { path: "cart", component: CartComponent, data: { animationState: 4 } },
      { path: "payment", component: PaymentComponent, data: { animationState: 5 } },
      { path: "tracker", component: TrackComponent, data: { animationState: 7 } },
      { path: "**", redirectTo: "home" },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
