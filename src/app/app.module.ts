import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBottomComponent } from './components/nav-bottom/nav-bottom.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { DetailComponent } from './pages/detail/detail.component';
import { BtnBackComponent } from './components/btn-back/btn-back.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { TrackComponent } from './pages/track/track.component';
import { FavorisComponent } from './pages/favoris/favoris.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    FavorisComponent,
    OrdersComponent,
    DetailComponent,
    PaymentComponent,
    TrackComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavComponent,
    NavBottomComponent,
    BtnBackComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
