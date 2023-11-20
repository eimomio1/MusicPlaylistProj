import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = 'http://localhost:8080/api'; // Replace with your backend URL and port

  constructor(private http: HttpClient) {}

  postReview(url: string, reviewData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, reviewData, { responseType: 'text' });
  }
  
  updateReview(url: string, reviewData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${url}`, reviewData, { responseType: 'text' });
  }
 
  getReviews(userId: string): Observable<any[]> {
    const url = `${this.baseUrl}/users/${userId}/playlists`;
    return this.http.get<any[]>(url);
  }

  deleteReview(url: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${url}`, { responseType: 'text' });
  }
  
}
 