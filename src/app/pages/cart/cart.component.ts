import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  constructor(private router: Router) {}
  goToPayment() {
    this.router.navigate(["/payment"]);
  }
}
