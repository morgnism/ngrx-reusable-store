import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PhotoActions from './actions';
import * as PhotoSelectors from './selectors';
import { EMPTY } from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import * as fromTopics from '../topics';
import { PhotosService } from 'src/app/data/photos.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../';

@Injectable({ providedIn: 'root' })
export class PhotoEffects {
  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTopics.loadTopicsSuccess),
      withLatestFrom(this.store.select(PhotoSelectors.selectActivePhotoType)),
      map(
        ([{ topics }, photoType]) =>
          topics.find((t) => t.slug === photoType).links.photos
      ),
      switchMap((url: string) =>
        this.photosService.getPhotos(url).pipe(
          map((photos) => PhotoActions.loadPhotoSuccess({ photos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  setActivePhotoType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PhotoActions.setActivePhotoType),
      withLatestFrom(
        this.store.select(fromTopics.selectAllTopics),
        this.store.select(PhotoSelectors.selectPhotosLoadedStatus)
      ),
      filter(([_, __, isLoaded]) => !isLoaded),
      map(
        ([{ photoType }, topics, _]) =>
          topics.find((t) => t.slug === photoType).links.photos
      ),
      switchMap((url: string) =>
        this.photosService.getPhotos(url).pipe(
          map((photos) => PhotoActions.loadPhotoSuccess({ photos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<ApplicationState>,
    private photosService: PhotosService
  ) {}
}
