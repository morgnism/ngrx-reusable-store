import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Photo } from './models/photo';
import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-reusable-store';

  photos$: Observable<Photo[]>;

  constructor(private store: Store<fromStore.PhotosState>) {}

  ngOnInit() {
    this.store.dispatch(fromStore.loadPhoto());
    this.photos$ = this.store.select(fromStore.selectAllPhotos);
  }
}
