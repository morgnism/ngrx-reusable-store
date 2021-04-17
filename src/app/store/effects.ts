import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PhotoActions from './actions';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PromosWithOtherPhotos } from '../data/photos-mock';

@Injectable({ providedIn: 'root' })
export class PhotoEffects {
  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PhotoActions.loadPhoto),
      switchMap(() =>
        of(PromosWithOtherPhotos).pipe(
          map((photos) => PhotoActions.loadPhotoSuccess({ photos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
