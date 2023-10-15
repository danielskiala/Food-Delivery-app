import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-btn-back',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './btn-back.component.html',
  styleUrls: ['./btn-back.component.scss']
})
export class BtnBackComponent {
  constructor(private router:Router){}

  goToHome(){
    this.router.navigate(['/home']);
  }
}
