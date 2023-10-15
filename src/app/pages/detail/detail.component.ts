import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements AfterViewInit {
  @ViewChild("scroll_ruban") scrollRuban: ElementRef<HTMLElement>;
  constructor(private router: Router) {}
  goToHome() {
    this.router.navigate(["/home"]);
  }
  goToCart(){
    this.router.navigate(["/cart"]);
  }

  ngAfterViewInit() {
    let prevScrollPos = window.scrollY;
    window.addEventListener("scroll", (e) => {
      let currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        this.scrollRuban.nativeElement.classList.add("active");
      } else {
        this.scrollRuban.nativeElement.classList.remove("active");
      }
      // prevScrollPos = currentScrollPos;

      // console.log(
      //   "PrevScroll : " +
      //     prevScrollPos +
      //     "\n" +
      //     "CurrentScroll : " +
      //     currentScrollPos
      // );
    });
  }
}
