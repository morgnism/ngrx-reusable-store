import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nature } from '../models/photo';

@Injectable({ providedIn: 'root' })
export class NaturePhotosService {
  page = 1;
  per_page = 9;

  constructor(private http: HttpClient) {}

  getNature(naturePhotosUrl?: string): Observable<Nature[]> {
    return this.http.get<Nature[]>(
      `${naturePhotosUrl}?page=${this.page}&per_page=${this.per_page}`
    );
  }
}
