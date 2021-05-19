import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Architecture } from '../models/photo';

@Injectable({ providedIn: 'root' })
export class ArchitecturePhotosService {
  page = 1;
  per_page = 9;

  constructor(private http: HttpClient) {}

  getArchitecture(architecturePhotosUrl?: string): Observable<Architecture[]> {
    return this.http.get<Architecture[]>(
      `${architecturePhotosUrl}?page=${this.page}&per_page=${this.per_page}`
    );
  }
}
