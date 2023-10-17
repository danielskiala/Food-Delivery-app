import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  pay_confirm:boolean;
  payConfirm(){
    this.pay_confirm = !this.pay_confirm;
  }
}
