import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bottom',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.scss'],
})
export class NavBottomComponent {}
