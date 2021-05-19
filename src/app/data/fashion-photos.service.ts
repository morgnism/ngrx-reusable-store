import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fashion } from '../models/photo';

@Injectable({ providedIn: 'root' })
export class FashionPhotosService {
  page = 1;
  per_page = 9;

  constructor(private http: HttpClient) {}

  getFashion(fashionPhotosUrl?: string): Observable<Fashion[]> {
    return this.http.get<Fashion[]>(
      `${fashionPhotosUrl}?page=${this.page}&per_page=${this.per_page}`
    );
  }
}
