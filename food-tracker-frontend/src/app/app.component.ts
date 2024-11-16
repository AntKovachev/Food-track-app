import { Component } from '@angular/core';
import { ApiService } from './services/api.service'; // Import ApiService
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule for ngIf, ngFor, etc.
import { FormsModule } from '@angular/forms';    // Import FormsModule for ngModel

@Component({
  selector: 'app-root',
  standalone: true,  // Declare the component as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule], // Import CommonModule and FormsModule for ngModel support
})
export class AppComponent {
  title = 'food-tracker-frontend';
  email: string = '';
  password: string = '';
  name: string = '';
  token: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  // Register method
  register() {
    this.apiService
      .registerUser(this.name, this.email, this.password)
      .subscribe((response) => {
        console.log('User registered successfully!', response);
      });
  }

  // Login method
  login() {
    this.apiService
      .loginUser(this.email, this.password)
      .subscribe((response: any) => {
        this.token = response.token;
        console.log('Login successful, token:', this.token);
        localStorage.setItem('token', this.token); // Store token in localStorage for persistence
      });
  }

  // Fetch foods with authentication (JWT)
  fetchFoods() {
    const token = localStorage.getItem('token');
    if (token) {
      this.apiService.getFoodsWithAuth(token).subscribe((response) => {
        console.log('Fetched foods:', response);
      });
    } else {
      console.log('No token found');
    }
  }
}
