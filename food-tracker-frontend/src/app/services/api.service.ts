import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api'; // Your backend URL

  constructor(private http: HttpClient) {}

  // Method for user registration
  registerUser(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, {
      name,
      email,
      password,
    });
  }

  // Method for user login
  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, {
      email,
      password,
    });
  }

  // Method to fetch foods (you can expand this for more CRUD operations)
  getFoods(): Observable<any> {
    return this.http.get(`${this.apiUrl}/foods`);
  }

  // For protected routes (using JWT token)
  getFoodsWithAuth(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/foods`, { headers });
  }
}
