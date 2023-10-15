import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent {
  constructor(private router: Router) {}
  goToCart() {
    this.router.navigate(["/cart"]);
  }
}
