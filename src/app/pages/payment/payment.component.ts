import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  constructor(private router:Router){}
  pay_confirm:boolean;
  payConfirm(){
    this.pay_confirm = !this.pay_confirm;
  }
  goToTrack(){
    this.router.navigate(['/tracker']);
  }
}
