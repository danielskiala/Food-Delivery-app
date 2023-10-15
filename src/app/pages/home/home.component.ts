import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private data:DataService) {}

  ngOnInit(): void {

  }
  goToDetail(id: string) {
    this.router.navigate([`food/${id}`]);
  }
}
