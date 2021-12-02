import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,private authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
