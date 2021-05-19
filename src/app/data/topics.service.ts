import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Topic } from '../models/topics';

@Injectable({ providedIn: 'root' })
export class TopicsService {
  page = 1;
  per_page = 9;

  constructor(private http: HttpClient) {}

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(
      `${environment.apiUrl}/topics/?page=${this.page}&per_page=${this.per_page}`
    );
  }
}
